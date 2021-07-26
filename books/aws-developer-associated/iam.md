---
title: IAM
code: N/A
---

## Core

- User can be group into Group (not required)

  Groups only contain users, not other groups

  User can belong to multiple groups

  All users in a group share the same permissions, make adding or removing permission easier (except inline policies)

- Permission is granted by using policies (JSON document)

  Least privilege principle

- Roles can have many policies attached. Various AWS resources alllow roles to be attached directly to them

## Policy

- Types
  - Managed Policies: Managed by AWS, not editable
  - Customer Managed Policies: Created by customer, editable
  - Inline Policies: Policies which directly attached to user
- Structure
  - Statement: Array of policies
    - Sid: Identifier of statement
    - Effect: Allow/Deny
    - Principal: account, user, role, or federated user to which the policy applied to
    - Action: list of actions to deny/allow
    - Resource: list of resources to which the actions applied to
    - Condition: Condition for this policy is in effect

## User

- Password policy: to set minimum requirements to user password
- Programmatic access key
- Multi-factor authentication (MFA)

  - Cannot be forced to enabled
  - Admin can create policy requiring MFA to access resources

- Temporary Security Credentials

  - Like programmatic access keys, except they are temporary
  - Useful in scenarios that involve: identity federation, delegation, cross-account access, IAM roles
  - Can last from minutes to hours

  - Not stored with the user, are generated dynamically and provided to the user when requested
  - Basis for roles and identity federation

## Role

- Based on Temporary Security Credentials
- Types:
  - AWS Service Role: a role that a service assumes to perform actions in AWS account
  - AWS service role for EC2 instance
    - Special type of service role for that an application running on EC2 instance
  - AWS service-linked role
    - A unique type of service role that is linked directly to an AWS service.
    - Are predefined, and includes all the permissions that the service requires
- Delegation: See [Cross-account roles](#cross-account-roles) below

## Identity Federation

- Linking multiple identity management systems
- Support:
  - Enterprise: SAML, Custom Federation broker
  - Web identity federation: Amazon, Facebook, Google, OpenID Connect 2.0

## Security Token Service (STS)

- STS is a web service that enables us to request temporary, limited-privilege credentials for IAM users or federated users

- Global service

- All requests go to a single endpoint at https://sts.amazonaws.com

  - Response include: AccessKeyID, SecretAccessKey, SessionToken, Expiration
  - Some API actions to obtain STS:
    - AssumeRole
    - AssumeRoleWithSAML
    - AssumeRoleWithWebIdentity
    - ...

- AssumeRoleWithWebIdentity

  ![](/img/aws-dva/iam-sts.webp)

## Cross-account roles

- Grant users from another

- Policy

  ```json
  {
    "Statement": {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::xxx:role/UpdateApp"
    }
  }
  ```

## Audit

- IAM Credentials Report: List all users, and their status
- IAM Access Advisor: Show service permissions granted to a user and when those services were last accessed

## Practical notes

- Use groups to assign permissions to IAM users
- Use IAM role instead of private keys
