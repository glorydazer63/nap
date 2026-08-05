---
author: GeorgeT
title: Astro-Workflow
description: How to build a local machine environmewnt for an Astro project using npm
modified: 2026-08-05
created: 2026-08-03
---

![Astro Logo](../../assets/astro-logo.webp)

## Workflow
1. An Astro workspace needs to be created on Desktop. Run:

```
npm create astro@latest
```

Decide what sort of Astro local repo you want to build. The Terminal will give you a few options. In my version of the N&P site, I chose the Starlight Docs option.

If this doesn't execute correctly because of missing dependencies, go to the newly created directory derived from the previous CLI, then run:

```
npm install
```

If this runs correctly, the terminal screen should prompt you to run;

```
npm audit
```

Now run the following:

```
cd <your-new project-name> (the folder that Astro named just before)
npm run dev
```

Terminal should display your Localhost website:
```
http://localhosts:4321
```

2. Create a new repo on GitHub.
3. Run the GitHub script on your Desktop terminal.

```
from your new local directory:

echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:glorydazer63/,your new project name.git
git push -u origin main
```

The content should now reside with the Repo

## Configure the Repo
1. A 'deploy.yml' script needs to be added to GitHub actions. This script needs to show a Node.JS build beyond v20, as that is now deprecated. As at August 2026, the latest version is v26.
2. Go to Settings > Pages. Set the runtime to 'GitHub Actions' not Branch Main'.
3. Once this is done, GitHub will begin publishing.

## Integrate to Netlify
1. Add a GitHub Action (netlify).

## Netlify Build Process
1. Link to GitHub repo.
2. Create a Build project. 
3. Set Deploy Build steps
4. Astro build, or npm run build
5. Set Pub dir = didt
6. Check Deploy run. 
7. Check published Site

## How to Apply Astro Themes
Details to follow.