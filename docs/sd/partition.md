---
sidebar_position: 20
---

# Data partition

### Consistent hashing

- Distribute requests/data evenly across server

- Minimize the re-arrange needed when add/remove a server

- Design a hash ring, with virtual nodes
  - The more virtual nodes, the more data are evenly distributed
  - higher capacity server can be assigned with more virtual nodes

### Data partition

- CAP

  - CP: Consistency and partition tolerance
  - AP: Avalability and partition tolerance
  - CA: Consistency and availability

- Consistency

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
