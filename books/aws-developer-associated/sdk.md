---
title: AWS CLI - SDK - API
---

## Dry Run

- Some commands can be expensive
- `--dry-run` option to simulate API calls (Not all commands have this option)

## Decode error message

* Encoded error message is returned if a command failed because of missing permissions
* Use `sts decode-authorization-message` to decode these messages
* Requires permission too

## Profiles

* CLI commands can use different IAM credentials using `--profile` option

* MFA

  * Exchange the session token with `aws sts get-session-token`

  * Save the token inside `~/.aws/credentials`

    ```apacheconfig
    [user]
    aws_access_key_id=key
    aws_secret_access_key=secret
    aws_session_token=token
    ```

## Call API directly

* API must be signed using SigV4
* Pass on Header or Query params
