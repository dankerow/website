---
title: Setting up a remote desktop on WSL2 with X2go
description: Learn how to set up a fast and smooth remote desktop on WSL2 using X2Go with KDE Plasma.
date: 2025-02-24
tags:
- Linux
- WSL2
- RDP
- x2go
---

## Introduction

Running a full Linux desktop environment on Windows using WSL2 can be quite useful for developers who need to work with Linux tools and applications.
Using a Remote Desktop Protocol (RDP) like xRDP often leads to performance issues, and that's how I spent an entire day trying setting it up on my laptop.

I finally found an alternative which is **X2Go**, A software providing a fast and efficient way to access a Linux GUI remotely.

After struggling for a whole day I decided to write this post to help others who might be facing the same issue.

---

## Prerequisites

Before you begin, make sure you have:

- **Windows 11** with **WSL2 enabled**
- **Ubuntu** installed on WSL2
- **X2Go Client** installed on Windows
- A working internet connection

---

## Configure WSL2 resource settings

By default, WSL2 may allocate only a 4 CPU cores and limited RAM. You'll want to allocate more resources for a smoother experience.

1. **Create** or **edit** the `.wslconfig` file:   
    In Windows, open **Notepad** (or your text editor) as your user and create (or edit) the file located at:
    
    ```bash
    C:\Users\YourUsername\.wslconfig
    ```

2. **Set Resource Limits**:   
    For example, if you have 14 cores on your machine and want to allocate 8 cores and 8GB of RAM, add the following lines to the `.wslconfig` file:   
    ```ini
    [wsl2]
    processors=8
    memory=8GB
    ```
 
    *Tip*: Adjust the values based on your system's resources.

3. **Restart WSL2**:
    Open an elevated PowerShell terminal and run:
    ```bash
    wsl --shutdown
    ```
    This will restart WSL2 with the new resource settings.

---

## Install a Linux desktop environment

Next, you'll need to install a Linux desktop environment. I'll use **KDE Plasma** because I prefer it to other desktop environments.
Feel free to choose which ever you like.

1. Update your linux system:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. Install Tasksel:
   ```bash
   sudo apt install -y tasksel
   ```
   
   Run `sudo tasksel` and select **KDE Plasma** to install KDE Plasma (or the one of your choice).

> **Note for WSL2 Users:**
> 
> WSL2 is a virtualized environment that doesn’t always support all system services out-of-the-box (such as systemd).
> Recent Windows builds now offer systemd support for WSL2, but if yours doesn’t, you might need to start some services manually.

---

## Install and configure the X2Go server

X2Go is a remote desktop software that provides fast and efficient access to a Linux desktop environment.
It is lightweight and offers excellent performance for remote desktop connections.
You can find more information about X2Go on their [documentation](https://wiki.x2go.org/doku.php/doc:newtox2go).

1. Install X2go server on your WSL2:
    ```bash
    sudo apt-get update
    sudo apt install -y x2goserver x2goserver-xsession
    ```
   
    This will install the X2Go server and the X2Go server session.
    The session package is required to start the KDE Plasma desktop.  
   
2. Configure KDE Plasma as the default desktop environment for X2Go:  
    - Edit the X2go session script:   

        ```bash
        sudo nano /etc/x2go/Xsession
        ```
    - Force KDE Plasma start:   
        At the bottom of the file add the following lines:

        ```bash
        export DISPLAY=:50
        exec dbus-launch --exit-with-session startplasma-x11
        ```

        Save and exit (<kbd>Ctrl</kbd>+<kbd>X</kbd>, then <kbd>Y</kbd>, then <kbd>Enter</kbd>).  
   
3. Restart X2go server:  
    ```bash
    sudo systemctl restart x2goserver
    ```

    This will restart the X2Go server with the new configuration.
    <br/><br/>
    *Tip*: If systemd doesn't work in your WSL2 distro, you might have to start the X2go server manually or restart your session.
    <br/><br/>
    To check the status of the server run:

    ```bash
    sudo systemctl status x2goserver
    ```

    The X2Go server should be ready to accept new connections !

---

## Install and configure X2Go client on Windows

1. **Download and install X2Go client** from [X2Go's official website](https://wiki.x2go.org/doku.php/doc:installation:x2goclient).

2. **Launch X2Go client** and create a new session.

3. **Configure session settings:**
    - **Session name:** Choose any name (e.g., `Ubuntu KDE WSL2`)
    - **Host:** `localhost` (WSL2’s network integration allows SSH connections through localhost).
    - **Login:** Your Ubuntu WSL2 username.
    - **SSH port:** `22` (ensure the SSH server is running in Ubuntu; if not, install and start OpenSSH Server with `sudo apt install openssh-server`).
    - **Session type:** **Custom Desktop**
        - Choose "Custom Desktop" to specify the desktop environment.
        - In the "Command" field, enter `startplasma-x11`.
    - **Display DPI:** `96`
    - **Color depth:** `16m-png` (best quality)

4. **Save and connect**:
    When you connect, you should see your KDE Plasma desktop. If you see a black screen instead or run into other issues, refer to the [troubleshooting section](#troubleshooting-common-issues).

---

## Troubleshooting common issues


### Black screen on connection

If you see a black screen after connecting, it might be due to the X2Go server not starting the KDE Plasma desktop correctly, or the display settings are wrong.

#### Possible solutions:
1. Kill stale X2Go sessions:
    Check if there are any stale X2Go sessions running
    ```bash
    ps aux | grep plasma
    ```
   
    It should show something like this:
    ```bash
    user  1234  0.0  0.0  1234  1234 ?        S    12:34   0:00 /usr/bin/startplasma-x11
    ```
   
    If you see any stale sessions, kill them by running:
    ```bash
    sudo pkill -u $USER plasma_session
    sudo pkill -u $USER startplasma-x11
    sudo pkill -u $USER x2goagent
    sudo systemctl restart x2goserver
    ```

    Try reconnecting to the X2Go session.

### KDE Wallet and GPG key prompts

When launching apps like Microsoft Edge, KDE Wallet may prompt for a GPG encryption key.
If you don't have a GPG key set up, create a new one:

- Install GnuPG:
    ```bash
    sudo apt install gnupg
    ```

- Generate a new GPG key:
    ```bash
    gpg --full-generate-key
    ```

    You'll be asked to configure the key:

    1. Select **"RSA and RSA"** (default).
    2. Enter the key size (**4096** is recommended).
    3. Set an expiration date (or choose "0" for no expiration).
    4. Enter your name, email, and an optional comment.
    5. Confirm and set a secure passphrase.
<br><br>
- Once the key is generated, you’ll see something like:
    ```bash
    gpg: key 1234567890ABCDEF marked as ultimately trusted
    ```

- Now, restart your session (or reboot your system), and try setting up KDE Wallet again. It should detect the GPG key and allow you to use encryption.

### Authentication errors in Muon Package Manager

If Muon asks for authentication but fails, try launching it with:

```bash
pkexec env DISPLAY=$DISPLAY XAUTHORITY=$XAUTHORITY muon
```

This will launch Muon with elevated privileges and should resolve the authentication issue.

### KDE Discover "offline" issue

If KDE Discover shows you that the system is offline, run:

```bash
sudo systemctl restart network-manager
```

This will restart the network manager service and should resolve the issue.

## Additional tips

- **Color depth and image quality:**   
    In X2go client’s session preferences under the Display tab, you can choose options like "16m-png" for the best image quality.
    If performance is more important, you can choose "16m-jpeg" or "256" colors for faster rendering.

- **Desktop environment:**   
    Disable unnecessary KDE desktop effects via System `Settings → Workspace Behavior → Desktop Effects` to improve performance.   

    Disable Baloo file indexing too if you don't need it, by running:   

    ```bash
    balooctl disable
    ```

---

## End...

You can now enjoy a fully functional desktop environment on WSL2 !
