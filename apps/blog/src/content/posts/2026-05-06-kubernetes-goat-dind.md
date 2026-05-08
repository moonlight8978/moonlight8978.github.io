---
title: "Kubernetes Goat Journal: DIND Exploitation"
published: 2026-05-06
draft: true
description: 'My head-first security lesson journal'
series: 'Kubernetes Goat Journal'
tags: ['kubernetes', 'devsecops', 'security']
---

## Scenario: Docker-in-Docker Exploitation

### MITRE ATT&CK

- T1611 - Privilege Escalation - Escape to Host

### Attack Chain

Initial Access

- Attacker có được quyền truy cập được vào pod hệ thống (như CI server, monitoring server, ...)
  - T1199 - Trusted Relationship - Hệ thống CI, monitoring thường có quyền cao để giám sát được sâu, hoặc deploy
  - T1190 - Exploit Public-Facing Application - Thông qua RCE, SSRF chain, ...
  - T1078.004 - Valid Accounts: Cloud Accounts: Đánh cắp được kubectl credentials để exec vào pod

Discovery: T1613 - Container and Resource Discovery, T1082 - System Information Discovery

- Attacker kiểm tra context của môi trường qua các lệnh `id`, `mount`, `uname -a`, ..., quan sát xem có container runtime socket được mount không

Execution:

- T1105 - Ingress Tool Transfer - Attacker download binary crictl để thao tác với container runtime
- T1059 - Command and Scripting Interpreter - Attacker chạy `crictl` commands để thao tác với container runtime

Privilege Escalation:

- T1611 - Escape to Host - Tạo priviledged container, mount host filesystem, `chroot` host filesystem, và sau đó có quyền root ở node

Credential Access: T1552.001

- Admin kubeconfig
- Kubernetes components certificates

Impact

- T1496 - Resource Hijacking - Attacker có thể tạo container mới để đào coin, invisible với cluster monitoring

### Risk Assessment

**Severity:** Critical
**Impact:** Attacker truy cập được toàn bộ cluster trong khi chỉ 1 pod bị compromise
**Likelihood in production:** Cao
- CI/CD cùng chạy bên trong môi trường, và thường được mount docker.sock, containerd.sock
- DaemonSets mount host path để monitoring
**Mitigating factors**:
- restricted `PodSecurityStandard`
- Admission control runtime policies có thể block socket mounts
- Nhiều hệ thống CI hiện tại dùng rootless builder (Buildkit, Buildah, ...)

### Detection

### Defense

### Lessons learned
