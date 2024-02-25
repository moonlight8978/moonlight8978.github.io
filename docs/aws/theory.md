---
sidebar_position: 100000
---

# AWS Theory Note

## IAM

- Role can only be used by trusted services
  - Can be used/assumed via container like Instance Profile

## EC2

- Purchase Options
  - Reserved (1 & 3 years term): long workloads
    - Reserved Instances
    - Convertible Reserved Instances: flexible instances
  - Saving Plans (1 & 3 years term): commit amount of usage
  - Spot Instances:
    - Short workloads
    - Cheat
    - Less reliable
  - Dedicated Hosts: ec2 instance run on entire dedicated physical server
  - Dedicated Instances:
    - ec2 instance run on VPC that run on hardware that bounded to account (for dedicated purpose). the hardware does not change as long as it is used
    - isolate hardware with non-dedicated instances
