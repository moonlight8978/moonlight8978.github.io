# Some problems with Rails + NGINX

## Headers

### `X-Forwarded-Host` header

TL;DR

```apacheconf
proxy_set_header Host $http_host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-Host $http_host;
```

When working with a Rails app with nginx + docker setup, but port 80 has been used by another project.

Instead of turning off those containers, I used another port for my new Rails app.

```yml docker-compose.yml
services:
  web:
    command: bundle exec rails s -b 0.0.0.0
  proxy:
    ports:
      - 3000:80
```

```apacheconf title=/etc/nginx/conf.d/default.conf
upstream web {
  server web:3000 fail_timeout=0;
}

server {
  listen 80;
  listen [::]:80;

  location / {
    proxy_pass http://web;
  }
}
```

But when we I open the site, I faced this problem, because Rails 6 added `HostAuthorization` to prevent DNS rebinding attacks

```txt title="open http://localhost:3000"
Blocked host: rails
To allow requests to rails, add the following to your environment configuration:
config.hosts << "rails"
```

After some search, the below config which seem popular.

```apacheconf
server {
  location / {
    proxy_set_header Host $http_host;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Port $server_port;
  }
}
```

Then try to open the homepage again, and it works, ... until some POST requests are made (e.g. login in)

```txt
ActionController::InvalidAuthenticityToken

    def handle_unverified_request
      raise ActionController::InvalidAuthenticityToken
    end
  end
end
```

Above error can be fixed by changing `X-Forwarded-Host` to `$http_host`

```apacheconf
proxy_set_header X-Forwarded-Host $http_host;
```

But why?
First we must understand what `$http_host` and `$host` is.

- [`$host`](https://nginx.org/en/docs/http/ngx_http_core_module.html#var_host): `Host` header (without port), or the server name
- [`$http_host`](https://nginx.org/en/docs/http/ngx_http_core_module.html#var_http_): `Host` header

→ `$host` = `localhost`, `$http_host` = `localhost:3000`

In Rails, before checking CSRF token, Rails will check whether the request's `origin` is equal to its `base_url`
`origin` is equal to request `Origin` header, which is set by browser automatically, in our case it was `localhost:3000`

```ruby title=https://github.com/rails/rails
# https://github.com/rails/rails/blob/75ac626c4e21129d8296d4206a1960563cc3d4aa/actionpack/lib/action_controller/metal/request_forgery_protection.rb#L227
def verify_authenticity_token # :doc:
  if !verified_request?
    handle_unverified_request
  end
end

# https://github.com/rails/rails/blob/75ac626c4e21129d8296d4206a1960563cc3d4aa/actionpack/lib/action_controller/metal/request_forgery_protection.rb#L289
def verified_request? # :doc:
  valid_request_origin?
end

# https://github.com/rails/rails/blob/75ac626c4e21129d8296d4206a1960563cc3d4aa/actionpack/lib/action_controller/metal/request_forgery_protection.rb#L455
def valid_request_origin? # :doc:
  request.origin.nil? || request.origin == request.base_url
end
```

Rails is a Rack application. To see what `base_url` is, we must see `rack` source code.

```ruby title=https://github.com/rack/rack
# https://github.com/rack/rack/blob/d0c6efc666ede26768f33935f00530629690369a/lib/rack/request.rb#L496
def base_url
  "#{scheme}://#{host_with_port}"
end

# https://github.com/rack/rack/blob/d0c6efc666ede26768f33935f00530629690369a/lib/rack/request.rb#L279
def host_with_port(authority = self.authority)
  host, _, port = split_authority(authority)

  if port == DEFAULT_PORTS[self.scheme]
    host
  else
    authority
  end
end

# https://github.com/rack/rack/blob/d0c6efc666ede26768f33935f00530629690369a/lib/rack/request.rb#L221
def authority
  forwarded_authority || # X-FORWARDED-HOST
  host_authority || # HOST
  server_authority # SERVER_NAME + SERVER_PORT
end
```

So, Rack prioritize `X-FORWARDED-HOST` over `HOST` header to evaluate the equation `request.origin == request.base_url`

→ If we use `$host` for `X-FORWARDED-HOST`, it would be `"localhost:3000" == "localhost"`

→ Because of the invalid host, Rails raise `InvalidAuthenticityToken` regardless of our token's validity

→ We need `$http_host` for `X-FORWARDED-HOST`

## Websocket

TL;DR

```apacheconf
map $http_upgrade $connection_upgrade {
  default upgrade;
  '' close;
}

server {
  location / {
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
  }
}
```

TODO: Explaination

## Use Rails template for errors

```apacheconf
server {
  proxy_intercept_errors;
}
```
