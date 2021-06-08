# Rails

## Docker

### Prevent image re-building after add new gems

#### Using named volume

```dockerfile title=Dockerfile
FROM ruby:...

ENV BUNDLE_APP_CONFIG=.bundle
RUN bundle config --local path "vendor/bundle"
RUN bundle install
```

```yml title=docker-compose.yml
services:
  web:
    volumes:
      - web-bundler:/app/vendor/bundle

volumes:
  - web-bundler
```

Pros:

- Environment-related installation commands are inside `Dockerfile`

Cons:

- Hard to debug library, because gems is stored at Docker-managed volume

#### Using bind mount

```txt title=.dockerignore
vendor/bundle
```

```dockerfile title=Dockerfile
FROM ruby:...

ENV BUNDLE_APP_CONFIG=.bundle
# No `bundle install`
```

```yml title=docker-compose.yml
service:
  web:
    volumes:
      - ./vendor/bundle:/app/vendor/bundle
    command: ./start.sh
```

```bash title=start.sh
bundle config --local path "vendor/bundle"
bundle install
bundle exec puma
```

Pros:

- Easy to debug library code by editing gem inside `vendor/bundle/ruby/x.x.x/gems` (server restarted required after editing gem)

Cons:

- Leave `vendor/bundle` at the host
