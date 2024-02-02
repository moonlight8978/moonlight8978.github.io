---
sidebar_position: 1
---

# Rate Limiter

### Algorithm

- Token Bucket:

  - Who uses? Amazon, Stripe
  - Wisely used, simple, well understood
  - Token are put in the bucket periodically (eg: refill each 4s), once the bucket is full, no tokens are added
    - Each request consumes 1 token, if there not enough tokens, the request is dropped
  - Can handle a burst of request, as long as the tokens are enough

- Leaking bucket

  - Shopify uses
  - FIFO queue, requests are processed at a fixed rate
    - When a request arrives, the system check if the queue is full, if it is not full, the request is added to the queue, otherwise, the request is dropped
    - Request are pulled from the queue and processed at the fixed interval
  - A burst of traffic fills up the queue with old requests, if they are not processed in time, the current requests will be rate limited

- Fixed window counter

  - Divide the timeline into fixed-size time windows, and assign a counter for each window
  - The rate will be reset at the end of each window
  - Spike in traffic at the edge of a window cause more requests than threshold

- Sliding window log

  - Keeps track of request timestamps
  - Check current window log size
  - Memory consumed because even if the request is rejected, its timestamp still be stored

- Sliding window counter

  - Combine Fixed window counter and Sliding window log
  - Define an overlap percentage of previous window as the rolling window
  - Total request = current window + previous window \* overlap percentage

### Storage

- Redis is preferred
- Fast
- `INCR`, `EXPIRE`

### Implementation

- Can be implemented in server-side, middlewares, or API-gateway, ...

### Issues

- Race condition

  - Lock is a solution for race condition, but is slows down the system
  - Redis Sorted Set can be used

- Synchronization
  - Redis to centralize data

### Monitoring

- The rate limitting algorithm/rules are effective
  - How many requests are dropped
  - Burst traffic

### Redis Sorted Set

- Each user has a sorted set for rate limitting

- When the request, the following batch will be executed

```
ts = getCurrentTimestamp()
interval = getRateLimitInterval()
MULTI
  ZREMRANGEBYSCORE user_id 0 (ts - interval)
  ZADD user_id ts
  ZRANGE user_id 0 -1
  EXPIRE user_id interval
EXEC
```

- Blocked request are counted
