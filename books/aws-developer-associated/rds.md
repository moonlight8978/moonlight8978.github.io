---
title: RDS
code: N/A
---

- Must create database subnet group which contains multiple subnets (for multi AZ purpose)

#### Encryption

- Encrypted at rest can be enabled
  - Using KMS key
  - Encrypt the automated backups, snapshots, and read replicas as well.

#### Backups

- Automated Backup:
  - Retention Periods: 1-35 days
  - All data stored in S3
- Manual Backup:
  - Take snapshot manually

#### Recovering

- Allows restoring a DB instance to a specified time
- Backup data is never restored overtop the existing instance
- Restored RDS instances will have new DNS endpoint

#### Multi AZ

- Sync: durable, reliable

- A Standby slave is placed on different availability zone (single region)

- Use for high Availability / Failover only

  - When Master down, Slave is promoted to Master

- Change from Single AZ to Multi AZ
  - Zero downtime operation
  - Create a snapshot → a new DB is restored from snapshot in another AZ → Establish synchronization

#### Read Replicas

- Async: scalable

:::tip Async vs Sync replication in MySQL
https://dev.mysql.com/doc/refman/8.0/en/replication-semisync.html
:::

- Different to Multi AZ
  - Read Replicas is for Read scalability. Replica is not promoted automatically, and must be done manually
- Automatically backup must be enabled to use Read Replicas
- Up to 5 replicas of a database
- Multi AZ, Cross region replicas, replica of replica is supported

- There's network cost when data goes from one AZ to another
  - For RDS Read Replica within the same region, there's no fee

#### Reserved Instances

- Long-term usage, better price than On-demand instances

#### Snapshot

- Copy: Copy to another region
- Migrate: Migrate to another DB engine (Aurora)

* Unerypted snapshot can not be restored to encrypted database, it must be copied to encrypted one first

#### Authentication

- IAM authentication works with MySQL and PostgreSQL
- Use auth token (obtain through IAM & RDS API call, lifetime 15mins) instead of password
- IAM manage credentials instead of DB (IAM Role)

#### Aurora

- Support both MySQL, PostgreSQL
- Good for unpredictable workload (storage grows automatically up to 64GB)
- Config ram & storage
- Up to 15 Replicas, higher performance than standard DB on RDS
- Higher cost (20%)
- HA & Read Scaling
  - 6 copies of data across 3 AZ
    - 4 out of 6 needed for writes, 3 out of 6 needed for reads (?)
    - Self healing with p2p replication
    - Data tự động được phân chia thành từng volume 10GB để đảm bảo IOPS
  - Cluster
    - Writer endpoint: point to the master
    - Reader endpoint: Load balance to all scaled read replicas
