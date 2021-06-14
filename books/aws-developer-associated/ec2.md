---
title: AWS EC2
code: N/A
---

## Overview

- Elastic Compute Cloud
- Things can be configured:
  - CPU, RAM (All instances use ECC RAM), Network (Public IP, Network speed)
  - Storage (SSD)
  - Firewall (Security Group)
  - Bootstrap script (User Data):
    - Run at the instance first start. Once run, it never run again.
    - Run with the root user

## Instance types

- Mac: Mac machine to build/test/develop iOS app

- T4g:

  - Busrtable general purpose
  - Arm-based AWS Graviton2 CPU (Custom built AWS Graviton2 Processor with 64-bit Arm Neoverse cores)

- Unlimited mode by default

  - EBS-optimized by default
  - Network bandwidth: Up to 5Gbps

- T3:

  - Burstable general purpose
  - 2.5 GHz Intel Xeon Scalable Processor
  - Unlimited mode by default
  - EBS optimized
  - Network bandwidth: Up to 5Gbps
  - AWS Nito System, Xeon => 30% price performance improvement over T2 instances

- T3a:

  - Burstable general purpose
  - AMD EPYC 7000 series processors with an all core turbo clock speed of 2.5 GHz
  - Unlimited mode by default
  - AWS Nitro System
  - EBS optimized
  - Network: Up to 5Gbps
  - Deliver up to 10% cost savings over comparable instance types

- T2:

  - Burstable performance
  - High frequency Intel Xeon processors (3.0 ~ 3.3GHz)
  - Standard mode by default
  - Network (Low - Moderate performance)

- M6g:

  - Arm-based AWS Graviton2 processors
  - EBS-optimized by default
  - deliver up to 40% better price/performance over current generation M5 instances and offer a balance of compute, memory, and networking resources
  - AWS Nitro System
  - EBS or NVMe SSDs
  - Network: 10~15Gbps

- M5:

  - Latest generation of General Purpose Instances
  - Network: 10-25Gbps
  - Up to 3.1 GHz Intel Xeon® Platinum 8175M processors with new Intel Advanced Vector Extension (AVX-512) instruction set
  - EBS or NVMe SSDs
  - AWS Nitro System

- M5a:

  - General Purpose
  - AMD EPYC 7000 series processors with an all core turbo clock speed of 2.5 GHz
  - Network: 10-20Gbps
  - EBS or NVMe SSDs
  - AWS Nitro System

- M5n:

  - 2nd generation Intel Xeon Scalable Processors (Cascade Lake) with a sustained all-core Turbo CPU frequency of 3.1 GHz and maximum single core turbo frequency of 3.5 GHz
  - Support for the new Intel Vector Neural Network Instructions (AVX-512 VNNI) (for Machine Learning)
  - Network: 25-100Gbps
  - EBS or NVMe SSDs
  - AWS Nitro System

- M5zn:

  - 2nd Generation Intel Xeon Scalable Processors (Cascade Lake) with an all-core turbo frequency up to 4.5 GHz
  - Network 25-100Gbps
  - High single thread performance

- M4:

  - 2.3 GHz Intel Xeon® E5-2686 v4 (Broadwell) processors or 2.4 GHz Intel Xeon® E5-2676 v3 (Haswell) processors
  - EBS-optimized by default
  - Network: Moderate - 25Gbps

- A1:

  - Custom built AWS Graviton Processor with 64-bit Arm Neoverse cores
  - Network: Up to 10Gbps
  - EBS-optimized by default
  - AWS Nitro System

- Compute optimized: C instances

  - Usecase: scientific modeling, dedicated game servers, and server engines

- Memory optimized: R, X instances

  - Usecase: real-time big data analytics, in-memory cache, in-memory databases

- Accelerated computing: P4, P3, P2, Inf1, G4dn, G4ad, G3, F1

  - Usecase: machine learning, speech recognization, compute finance, ...

- Storage optimized: I, D, H instances

  - Usecase: NoSQL, in-memory or transaction databases, data warehouse, ...

- Burstable
  - Burstable:
    - Traditional Amazon EC2 instance types provide fixed CPU utilization, while burstable performance instances provide a baseline level of CPU utilization with the ability to burst CPU utilization above the baseline level.
    - The baseline utilization and ability to burst are governed by CPU credits.
    - If a burstable performance instance uses fewer CPU resources than is required for baseline utilization (such as when it is idle), the unspent CPU credits are accrued in the CPU credit balance. If a burstable performance instance needs to burst above the baseline utilization level, it spends the accrued credits. The more credits that a burstable performance instance has accrued, the more time it can burst beyond its baseline when more CPU utilization is needed.
  - CPU credits: The following scenarios all use one CPU credit
    - One vCPU at 100% utilization for one minute
    - One vCPU at 50% utilization for two minutes
    - Two vCPUs at 25% utilization for two minutes
  - EBS-optimized:
  - Unlimited mode:
    - A burstable performance instance configured as `unlimited` can sustain high CPU utilization for any period of time whenever required.
    - Charges might apply if your average utilization over a rolling 24-hour period exceeds the baseline utilization of the instance.

## Instance Profile

- Recommend over embeded credentials
- IAM Policy ---> IAM Role ---> Instance profile <--- EC2 Instance

## Placement groups

- Are logical placement
- Cluster:
  - Pack instances together inside a AZ
  - Low-latency for tightly coupled note-to-node communication
  - Cannot be multi AZ
  - Well suited for HPC applications
- Partition:
  - Spread across logical partitions (inside a AZ ?)
  - Each partition does not share the same hardware with each other (rack per partition)
  - Well suited for distributed and replicated workloads
- Spread
  - Each instance is placed on a different rack
  - Critical instances should be keep seperated from each other
  - Up to 7 instances
  - Can be multi AZ

## User data

- A script that run when lauching an instance (only first launch, restarting will not trigger the execution by default)

  - Can be configured to be executed on restart: [link](https://aws.amazon.com/premiumsupport/knowledge-center/execute-user-data-ec2/) (the example use mime-multi part file)

  ```txt
  Content-Type: multipart/mixed; boundary="//"
  MIME-Version: 1.0

  --//
  Content-Type: text/cloud-config; charset="us-ascii"
  MIME-Version: 1.0
  Content-Transfer-Encoding: 7bit
  Content-Disposition: attachment; filename="cloud-config.txt"

  #cloud-config
  cloud_final_modules:
  - [scripts-user, always]

  --//
  Content-Type: text/x-shellscript; charset="us-ascii"
  MIME-Version: 1.0
  Content-Transfer-Encoding: 7bit
  Content-Disposition: attachment; filename="userdata.txt"

  #!/bin/bash
  /bin/echo "Hello World" >> /tmp/testfile.txt
  --//
  ```

- User data is executed as `root` by default

- Debug (on Amazon AMI Linux 2)

```log
Jun 10 09:38:21 cloud-init[3233]: util.py[WARNING]: Failed running /var/lib/cloud/instance/scripts/part-001 [1]
Jun 10 09:38:21 cloud-init[3233]: cc_scripts_user.py[WARNING]: Failed to run module scripts-user (scripts in /var/lib/cloud/instance/scripts)
Jun 10 09:38:21 cloud-init[3233]: util.py[WARNING]: Running module scripts-user (<module 'cloudinit.config.cc_scripts_user' from '/usr/lib/python2.7/site-packages/cloudinit/config/cc_scripts_user.pyc'>) failed
```

```log
Cloud-init v. 19.3-43.amzn2 finished at Thu, 10 Jun 2021 09:43:39 +0000. Datasource DataSourceEc2.  Up 11.33 seconds
```

## Metadata

```bash
curl http://169.254.169.254/latest/meta-data
```
