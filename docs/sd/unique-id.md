---
sidebar_position: 100
---

# Unique ID

### Auto increment

- Hard to scale
- Do not go up with time across multiple servers

### UUID

- Non-numeric
- Do not go up with time
- 128-bits long

### Flickr Ticket server

- Centralize auto increment ID in a single database server, called a Ticket Server

### Twitter snowflake

```mermaid
block-beta
  columns 12
  a["1 bit\nReserved"]:1 b["41 bit\nTimestamp Millis"]:4 c["5 bit\nDatacenter ID"]:3 d["5 bit\nMachine ID"]:3 e["12 bit\nSequence ID"]:2
```

- Each millisecond, single machine can generate up to $4096$ ($2^{12}$) records

### Materials

- Clock synchronization: Network Time Protocol

- Snowflake section length tunning
