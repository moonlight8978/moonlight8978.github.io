---
title: AWS Route 53
code: N/A
---

## Overview

- A record: hostname to IPv4
- AAAA: hostname to IPv6
- CNAME: hostname to domain
- Alias: hostname to AWS Resources

  - API Gateway
  - ALB
  - CloudFront
  - ...

- Can handle public domain, private domain (only app can resolve the hostname)

## Components

- Hosted zone (domain)

* Record sets (subdomain)
  - Alias: create AWS service alias
  - Routing policy: If there're multiple destinations
    - Simple: random selection
    - Weighted: route traffic based on weighted values, allows to send a certain percentage of overall traffic to one server, and have other traffic to completely different server
    - Latency-Based: route traffic to region with lowest latency
    - Failover: route traffic if primary endpoint is unhealthy to secondary endpoint
    - Geolocation: route traffic based on the location of user
    - Multivalue answer: respond to DNS queries with up to 8 healthy records selected at random. Similar to Simple policy, however with an added heath check
* Health check:

  - Every 30s by default. Can be reduced to 10s
  - CloudWatch alarm can be created to alert unhealthy
  - A health check can monitor another health check

* Resolver

## Types

- CNAME: works for non-root domain
- Alias:
  - works for both root and non-root domain
  - free of charge

## Routing policy

#### Simple

- DNS server returns one or multiple records
- Client choose random, this random one will be in effect until the TTL passed
- No healthcheck

#### Weighted

- Control % of traffic that go to specific endpoints
- Can be associated with healthchecks

#### Latency

- Traffic will be routed to endpoint with lowest latency (register with region)

#### Failover

- Automatically fallback to secondary record when the primary record fails the healthcheck
- Healthcheck is required

#### Geo Location

- Traffic from specific location should go to specific IP
- Default fallback destination

#### Geoproximity

- Divide the region into geographic based on **bias**
- The higher **bias**, more traffic will be routed to the resource

#### Multi value

- Routing traffic to mulitiple resources
- Not a substitue for ELB
- Healthcheck


#### Heathcheck

- X fail in a row => unhealthy
- X success in a row => healthy
- Default interval: 30s (upto 10s but higher cost)
- Multiple Route53 health checkers (about 15) will establish TCP request to the healthcheck endpoint
  - At 30s interval, there're about 2 requests per second
  - Can be TCP, HTTP/HTTPS (without SSL verification)
- Can be integrated with CloudWatch (monitoring)
- Healthcheck can be linked together with Route53 DNS queries (?)


## TODO:

- Resolver
