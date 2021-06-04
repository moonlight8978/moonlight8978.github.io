# OAuth2

## What OAuth2 do?

- Delegation protocol (Security protocol)
  - Let someone who controls a resource allow a software to access that resource on their behalf
  - The application requests owner of the resource, receives _tokens_ that can use to access the resource.
  - OAuth2 can limit the client's access on the resource
- OAuth is defined under HTTP
  - OAuth2 with Bearer token provides no signatures, it is not meant to be used outside of HTTPS
- OAuth is not an authentication protocol
  - The resource owner does not need to know who request to access the resource, only that _somebody_ said it was OK to access the resource.
- OAuth is not define authorization-process mechanism.

## Flow

![](/img/oauth2/flow.webp)

## Components

### Access token

- aka _token_
- Are opaque to the client. The client does not need to know about the token it self, client's job is to carry the token

### Scopes

- A set of rights at a protected resource.

### Refresh token

### Authorization grants

## Implement

### Register OAuth client

- `client_id`
- `client_secret`:
  - Shared secret in order to authenticate when talking with the authorization server
  - Can be passed to authorization server in many ways, e.g. Basic Authorization
- `redirect_uris`

### Send authorization request

- `/authorize`
  - `response_type=code`
  - `client_id={client_id}`
  - `redirect_uri={redirect_uri}`

=> 302 Redirect to `{redirect_uri}?code={code}`

### Process callback

- `/token`
  - `grant_type=authorization_code`
  - `code={code}`
  - `redirect_uri={redirect_uri}`
  - `client_secret={client_secret}`

=> `{ access_token: "token", "refresh_token": "token", "token_type": "Bearer" }`

### Adding cross-site protection with `state` parameter

- Any time someone comes to http://localhost:9000/ callback, the client will naively take in the input code value and attempt to post it to the authorization server

  => Waste both client and server resources and potentially causing our client to fetch a token it never requested

- Client add `state` parameter to `/authorize` request
  - Authorization returns `code` with `state`
  - Client check if `state` matches old generated one, then send request to authorization server
