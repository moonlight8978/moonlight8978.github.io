---
title: AWS Security Group
---

## Overview

- Acting as a firewall
- Deny all traffic by default, only contain _Allow_ rules
- Source/Destination can be IP, IP range, another security group, or prefix list
- Association with instance: n-n

## Popular classic ports

- SSH (log onto a Linux instance): 22
- SFTP - Secure File Transfer Protocol: 22
- FTP: 21
- HTTP: 80
- HTTPS: 443
- RDP (log onto a Windows instance): 3389
