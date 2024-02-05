---
sidebar_position: 20
---

# Distributed system

### CAP theorem

- CAP

  - CP: Consistency and partition tolerance
  - AP: Avalability and partition tolerance
  - CA: Consistency and availability

### Data partition

- Distribute data evenly across server

- Minimize the re-arrange needed when add/remove a server

- Use hash ring

### Data replication

- Design a hash ring, with virtual nodes

  - The more virtual nodes, the more data are evenly distributed
  - higher capacity server can be assigned with more virtual nodes

- Consistency

  - Quorum consensus
  - $N$: Numbers of replicas
  - $W$: Consistent write = write operation ack by $W$ replicas
  - $R$: Consistent read = read operation ack by $R$ replicas
  - If $W + R > N$, strong consistency is guaranteed

- Consistency model

  - Strong consistency
  - Weak consistency
  - Eventual consistency

- Inconsistency resolution

  - Versioning
  - Vector clocks
    - Pairs of [Server, Version]
    - Each modification on a server, increase (or add) the counter by 1
    - $D([s0,1])$, $D([s0,1],[s1,1])$ is ancestor without any conflicts. But there is conflict between $D([s0,1],[s1,1])$ and $D([s0,2])$
  - Conflict have to be resolved on client side
  - Vector clocks can grow rapidly, a threshold is set to limit the length, the oldest pairs are removed -> Ineffeciencies in reconciliation

### Failure

- Hinted handoff process: Handle temporarily failure

- Permanent failure: Anti-entropy protocol

  - Merkle tree: Sync the different, not the whole data

- Replicate data across multiple data centers
