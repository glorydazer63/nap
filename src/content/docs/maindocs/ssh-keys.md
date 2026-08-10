---
Author: GeorgeT
title: SSH Keys
description: SSH Keys - Create and Administer
tags:
  - ssh-keys
created: 2026-08-10
modified: 2026-08-19
---

## SSH Keys Overview
When creating a new SSH Key, these are the command line instructions to create it.
The instructions are geared toward a Linux local machine install.

```
ssh-keygen -t ed25519 -C "<email address>" -f ~/.ssh/ed25519
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/ed25519
git config core.sshCommand "ssh -i ~/.ssh/ed25519 -o IdentitiesOnly=yes"
```

### SSH Key Generator
- The `-t ed25519` reference is the algorithm GitHub uses to generate the key.
- The `-C` reference is the email address of the GitHub account holder where the repo resides.
- The `-f` reference is where the key file resides on your local machine.

### SSH Key Authentication
These two commands links the SSH Key to the SSH Agent.

```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/ed25519
```

### SSH Key Authentication
The core.sshCommand configuration variable in Git allows you to specify a custom SSH command for repository authentication.

```
git config core.sshCommand "ssh -i ~/.ssh/ed25519 -o IdentitiesOnly=yes"
```

Once these are done, then `git push` and `git pull` commands can operate seamlesly.

Also, you can create multiple SSH Keys, all that is required is to copy and change the `-f` reference, so that `e25519` becomes `ed25519_repo2` or whatever you want to call it, and run a new Key Gen code:

```
ssh-keygen -t ed25519 -C "<email address>" -f ~/.ssh/ed25519_repo2
```

