# Monitor containers with Datadog

## Terms

- APM: Application Performance Monitoring
- RSS: resident set size, is data that belongs to a process: stacks, heaps, etc.
- Tracing spans, tags, etc. https://opentracing.io/docs/overview/spans/#what-is-a-span

## Docker monitoring problem

- [Article](https://www.datadoghq.com/blog/the-docker-monitoring-problem/)

![](https://imgix.datadoghq.com/img/blog/the-docker-monitoring-problem/docker-p1-2.png?auto=format&fit=max&w=847)

- Traditional monitoring

  - APM: Identify and pinpoint bottlenecks and errors
  - Infrastructure monitoring: collects metrics about the host (CPU, Memory, I/O, ...)
  - Monitor containers and OTS components are hard

![](https://imgix.datadoghq.com/img/blog/the-docker-monitoring-problem/docker-p1-6.png?auto=format&fit=max&w=847)

- Modern monitoring
  - Containers are short-lived
  - Recenter the monitoring around layers and tags
  - Monitor all layers of your stack together. The key is that you must be able to see what’s happening across the layers simultaneously, and determine how problems in one part of the stack ripple to the rest of the stack.

## Key metrics

- https://www.datadoghq.com/blog/amazon-ecs-metrics/

## Tips

- Test throughput, performance of firelens and fluent bit https://aws.amazon.com/blogs/containers/under-the-hood-firelens-for-amazon-ecs-tasks/
- Special tags:
  - https://docs.datadoghq.com/tracing/guide/metrics_namespace/
  - https://docs.datadoghq.com/tracing/error_tracking/#how-datadog-error-tracking-works
