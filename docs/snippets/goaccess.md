---
sidebar_position: 2000
---

# GoAccess

### Under reverse proxy

```yaml title="docker-compose.yml"
services:
  goaccess:
    command:
      - --real-time-html
      - --ws-url
      - wss://localhost:443/access-log/ws
    volumes:
      - ./report.html:/report.html
      - ./access.log:/access.log:ro
    expose:
      - 7890

  nginx:
    volumes:
      - ./report.html:/usr/share/nginx/html/index.html:ro
    expose:
      - 80

  traefik:
    volumes:
      - ./access.log:/var/log/traefik.log
    ports:
      - "443:443"
      - "80:80"
```

```apacheconf title="nginx.conf"
map $http_upgrade $connection_upgrade {
  default upgrade;
  '' close;
}

server {
  location /ws {
    proxy_pass http://goaccess:7890;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
  }
}
```

### Traefik access log

```yaml title="docker-compose.yml"
services:
  goaccess:
    command:
      - --log-format
      - TRAEFIKCLF
      - --date-format=%d/%b/%Y
      - --time-format=%T
```
