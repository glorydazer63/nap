---
author: GeorgeT
title: Retype-Workflow
description: How to build a local machine environmewnt for a Retype project using npm
<<<<<<< HEAD
tags: Workflows
modified: 2026-08-10
=======
modified: 2026-08-07
>>>>>>> origin/main
created: 2026-08-03
---

![Retype Logo](https://i.postimg.cc/0jqPfJ9c/retype.jpg)

## All about Retype

From the Web:

"Retype is a Markdown-first documentation website builder that converts Markdown .md files into a beautiful, production-ready static website without requiring coding or design work.  It is a command-line tool installed via npm, yarn, or dotnet CLI (e.g., npm install retypeapp --global), which allows users to write content in plain text and automatically generates HTML output."

### Local Machine
<<<<<<< HEAD
Ensure you have all pre requisite build components installed. Obviously, Git, npm, SSH and retype are the key ones (if not already installed previously).

To bring up the Staging build within your local machine, follow these steps:

1. From Terminal,:

```
retype start
```

- The Localhost URL should display, copy/paste it into your browser to view it.
- If it detects an error, then the project needs investigation as to the cause. The resulting error screen should provide a log entry to assist with resolving it.
- Rerun the command until the site project displays correctly.

### GitHub
Retype requires a deploy script to be enabled in GitHub actions. Include this into a file called `retype-action.yml`, to be stored in the  `github/workflows` folder:

```
name: Publish Retype powered website to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 0

      - uses: retypeapp/action-build@latest

      - uses: retypeapp/action-github-pages@latest
        with:
          update-branch: true 
```

### GitHub Pages
When configuring a Retype project, you'll need to point to the Retype Branch, within the Build and Deploy section.

![retype-build-deploy](https://i.postimg.cc/d0GX8ZJT/retype-build-deploy.png)

Once locked in, Save it.

If all this works as intended, your GitHub Page should display online.
=======


### GitHub

### Once Published
- Looks good. 
- On Mobile, it seems the NavBar details are not displayed.
- Footer displayed correctly
- 
>>>>>>> origin/main
