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
    - ec2 instance run on VPC that run on hardware that is bounded to account (for dedicated purpose). the hardware does not change as long as it is used
    - isolate hardware with non-dedicated instances

## EBS

|                    | Type                           | Ephemeral | Multi-Attach                             | Performance              |
| ------------------ | ------------------------------ |:---------:|:----------------------------------------:| ------------------------ |
| `gp2`              | Network block storage <br/>SSD |           |                                          | General Purpose          |
| `gp3`              | ^                              |           |                                          | GP                       |
| `io1`              | ^                              |           | Same AZ                                  | High                     |
| `io2`              | ^                              |           | Same AZ                                  | High                     |
| `st1`              | Network block storage<br/>HDD  |           |                                          | GP                       |
| `sc1`              | ^                              |           |                                          | Infrequently Accessed    |
| EFS                | Network file storage           |           | Regional<br/>One Zone<br/>Security Group | Very high<br/>Autoscaled |
| EC2 Instance Store | Physical Drive                 | ✅         |                                          | Very high                |

- Network drives -> latency

- Accidential deletion to Snapshots or AMI can be prevented by using Recycle Bin (1d ~ 1y)

- [Device Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html)

- EC2 Instance Store
  
  - Physical drives attach to the instance
  - Ephemeral
  - Very high IOPS

- Only SSD-type volume can be root volume

- EFS (Linux only)
  
  - Network Filesystem
  - Expensive
  - Auto-scaled, can be attach to multiple instances
