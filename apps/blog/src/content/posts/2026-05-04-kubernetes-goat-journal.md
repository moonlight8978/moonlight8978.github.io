---
title: "Learning Kubernetes Security: Kubernetes Goat Lab Journal"
published: 2026-05-04
draft: true
description: 'My head-first security lesson journal'
series: 'Kubernetes Goat Journal'
tags: ['kubernetes', 'devsecops', 'security']
---

## Cài đặt Kubernetes Goat

Tôi không có sẵn máy Linux amd64, nên tôi tận dụng chiếc Macbook của mình, đã cài đặt sẵn Orbstack để có thể cài Goat 1 cách nhanh nhất. Tôi đặt ra 1 rule: không nhảy vào rabbit hole khi có issue về infrastructure trong lúc học.

1. KIND attempt

- Ban đầu, để nhanh chóng bắt đầu với Goat, tôi chọn KIND trên OrbStack cho nhanh, nhưng tới scenario 2 - DIND exploitation, tôi gặp vấn đề về socket mount, `docker.sock` mount thành công, tuy nhiên Docker của tôi disable CRI, nên `crictl` không giao tiếp được với socket, tôi định cài Docker CLI thay thế, nhưng muốn dùng `crictl` hơn, nên tôi quyết định không dùng KIND nữa, mà sẽ cài k3s trên VM.

2. OrbStack VM

- Tôi dùng luôn VM của OrbStack cho nhanh, nó hoạt động khi tôi dùng Docker làm container runtime (thêm `--docker` khi cài đặt).  Tuy nhiên dockershim hiện tại đã bị deprecate trong k8s, nên tôi không dùng nó, và script install k3s bị treo vô tận... Lỗi do seccomp không available, mặc dù check config vẫn có seccomp.

- Do OrbStack VM dùng custom kernel (không phải kernel Ubuntu standard), kernel này thiếu một số seccomp probe behavior mà containerd của k3s expect → containerd refuse spawn pod sandbox với lỗi "seccomp is not supported"

3. Lima VM

- Tôi quyết định quay lại `lima`, tool mà trước đây tôi thường sử dụng để tạo Kubernetes playground cluster, làm việc với Docker image, tuy nhiên máy tôi không khỏe lắm nên quyết định chuyển qua OrbStack cho nhanh và tiện.

- Cài đặt k3s thành công, mà không có issue gì
  - Tôi cài đặt ubuntu 24.04 amd64 (qemu) trên máy Mac chạy Apple Silicone của tôi

  - Do lima cho phép choose kernel, default dùng kernel match Ubuntu mainline (Claude-sama dạy tôi vậy)

## Scenario: Sensitive keys in codebases

### MITRE ATT&CK

- T1595.003 - Reconnaissance - Active Scanning: Wordlist Scanning
- T1213.003 - Collection - Data from Information Repositories: Code Repositories
- T1552.001 - Credentials Access - Unsecured Credentials: Credentials In Files - if hardcoded secrets present

**Possible follow-on (not exercised in lab):**
- T1567 - Exfiltration - Exfiltration Over Web Service (if attacker exfils source to dump site)
- T1657 - Impact - Financial Theft (if extortion follows)

### Attack Chain

Reconnaissance

- Attacker dùng tool như `gobuster` để scan public-facing service, tìm `.git` folder

Collection

- Attacker dùng tool như `git-dumper` download toàn bộ git history (nếu clone `—depth 0`), và có toàn bộ source code của dự án

Impact

- Nếu trong source code có chứa hard-coded secret, attacker có thể scan bằng cách dùng các tool như `gitleaks`, `trufflehog`

- Leak PII nếu hardcode

- Source code bị rao bán hoặc tống tiền

### Risk Assessment

**Severity:** Critical/High
**Impact:** Toàn bộ source code bị lộ, PII bị rao bán, Secrets bị khai thác để thực thi trái phép
**Likelihood in production:** Cao, nếu team không có kinh nghiệm build docker container cẩn thận

### Detection

#### Build time dection

- Dùng trivy scan image với `--scanners secret`
- Scan commit với `gitleaks` (CI hoặc precommit rules)
- Dùng `dive` để scan image last layer xem có chứa file nhạy cảm không

#### Network/HTTP layer (Detect reconnaissance)

Sigma-style pseudocode

```yaml
title: Detect .git scanning on http servers
detection:
  selection:
    method: get
    path|contains: '/.git'
level: low
```

```yaml
detection:
title: Detect .git exposed on the internet
  selection:
    method: get
    path|contains: '/.git'
    status: 200
level: high
```

Phân biệt giữa attempt và success, nếu `.git` bị scan mà trả về success -> rất nguy hiểm

### Defense

| Layer | Implementation |
|-------|----------------|
| Development | Không hardcode PII, secrets trong source code |
| Build | Scan image với trivy, dive. Scan sourcecode với gitleaks |
| Build | Dùng .dockerignore để ignore các file nhạy cảm khỏi image |
| Logging/WAF | Detect, block, alert khi attacker scan `.git` |

### Lessons learned

- `COPY . .` trong Dockerfile giúp tiết kiệm công sức nhưng rủi ro lớn, nếu không cẩn thận sẽ copy cả những file nhạy cảm vào image
- Download toàn bộ git tree chỉ mất vài giây, không hề khó
- Nếu chỉ remove secret ở commit cuối cùng, attacker vẫn có thể checkout về commit cũ để lấy secret
