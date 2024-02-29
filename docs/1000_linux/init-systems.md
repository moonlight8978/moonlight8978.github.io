---
sidebar_position: 1
---

# Init systems

## Run Levels

- A system's **run level** (aka **init state**) defines what services and resources are available to users

- A system can be in only one run level at a time

- Most common run levels

  - Run level 3:

    - All system resources are available and users can login
    - Booting a system brings it to run level 3
    - Day-to-day operations

  - Run level 6:

    - Stop the OS and reboots to the state that is defined by `initdefault` in `/etc/inittab`

  - Run level 0:
    - Shutdown, safe to turn off power

## sysvinit

- `/etc/init.d` is a folder containing initialization and termination scripts for changing init states
- The boot order is determined during boot by the order of files in `/etc/rc?.d`

:::tip
`insserv`
`update-rc.d`
:::

## systemd

- **System Daemon** starts the system services in parallel, speeds up the initialization process

- GUI:
  - [Cockpit](https://cockpit-project.org/)
    - Login as root: Remove `root` from `/etc/cockpit/disallowed-users`. [Issue](https://github.com/cockpit-project/cockpit/issues/18427#issuecomment-1448831430)
    - Available at 9090 port

## WSL meets systemd

- WSL must be 0.67.6 or newer
- Open WSL distro
- Edit `wsl.conf`

```bash title="/etc/wsl.conf"
[boot]
systemd=true
```

- Restart WSL

```powershell
wsl.exe --shutdown
```
