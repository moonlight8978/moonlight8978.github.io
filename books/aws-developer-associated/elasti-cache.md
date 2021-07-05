---
title: AWS Elasti Cache
code: N/A
---

## Overview

Caching:

- Temporary storage data

- Trade off durability with speed.

## Use case

- Cache heavy database queries

  - Involes heavy application code changes

- Store session data to make the instance be stateless

## Types

### In-Memory Data Store

- Store data in RAM
- Very high speed. Not durable.

### ElastiCache:

- Run scalable in-memory data stores

- Accessible within VPC to ensure low latency

- Supports:

  - Memcached:
    - Simple. Key/value.
    - Super fast. Preffered for caching HTML
    - Multi-node for partitioning of data (sharding)
    - No HA. No persistence. No backup & restore.
    - Multi-threaded architecture
  - Redis:
    - Richer data & operations.
    - Preffered for leaderboards, keep track of unread notifications, .... Arguably not as fast as Memcached
    - Multi AZ with failover
    - Read replicas, HA
    - Data durability using AOF Persistence
    - Backup, restore feature

  TODO: Usecase memcached, and redis

- Redis cluster mode can be enabled to achieve high availability
