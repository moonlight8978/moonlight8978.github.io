---
sidebar_position: 1000
---

# Metrics

## Prometheus

- Store all data as time series

- Group labeled data into a metric

```
api_http_requests_total{method="POST", handler="/messages"}
```

- Collecting metrics by scraping HTTP endpoints of the services

- Each service has to collect the metric on its behalf (by prometheus sdk, ...) and expose them following the API

- Recommended stack: Prometheus + Grafana (for UI)

## Telegraf

- Like Prometheus, it collects metrics by scraping HTTP endpoints

- It often outputs to InfluxDB

- Recommended stack: Telegraf + InfluxDB + Grafana

## Calculating metrics

- The service counts its metric, and expose them to an HTTP Endpoint

eg: https://github.com/siimon/prom-client

- Use log aggregator

eg: [Fluentd](https://docs.fluentd.org/monitoring-fluentd/monitoring-prometheus)
