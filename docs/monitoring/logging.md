---
sidebar_position: 2000
---

# Logging

## Framework/Application log

- Every web framework or application (should) has its own log

- Common format:

  - JSON (logstash)
  - Apache Combined/Common
  - CLF (Common Log Format)
  - ...

## Access log

- Web Server/Proxy usually has its own `access.log`, like Traefik, NGINX, Apache, ...

```apacheconf title="nginx.conf"
access_log /path/to/access.log combined if=$loggable;
```

```yml title="traefik.yml"
accessLog:
  filePath: /var/log/traefik.log
```

## GoAccess

- Can analyze the log in various format with high performance

- Can output report in realtime

```bash
goaccess -a -o report.html --log-format COMBINED --real-time-html
```
