---
sidebar_position: 3
---

# Linux

## User

- Add user

```bash
adduser <username> # Beginner
useradd <username> # Advanced
```

- Add user to group

```bash
usermod -aG <group> <user>
```

- Remove user from group

```bash
 sudo gpasswd -d <user> <group>
```
