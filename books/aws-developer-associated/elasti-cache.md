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

## Caching

### Cache strategies

- Lazy Loading

  ```ruby
  def find_user(id)
    record = redis.get(id)
    return record if record

    record = db.query("select * from users where id = #{id}")
    redis.set(id, record)
    record
  end
  ```

  - Read penalty
  - Cache invalidate

- Write through

  - When app write to database, it write to the cache too
  - Cache missing until data is write
  - Write penalty, user expect write requests are slower than read requests
  - A lot of data will never be read

- Combine both strategies

### Cache eviction

- Delete cache explicitly
- Full memory, or not recently used (Least Recently Used - LRU)
- Time to live - TTL

## Cluster mode

- Cluster mode disabled

  - Primary + up to 5 replicas
  - One shard, every node has all the data
  - Replicas: read only

- Cluster mode enabled
  - Data is partition across shards
  - Each shard has a primary, up to 5 replicas
  - Multi AZ supported
  - Up to 500 nodes per cluster
