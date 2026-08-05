---
author: GeorgeT
title: Design-Tools
description: Design Tools
seo: false
latest:
created: 2026-07-07
modified: 2026-08-05
---

## VS Code
When designing Astro sites there is the ability to edit the source files using **VS Code**. We can dovetail directly into GitHub, so that the local pages can be made available offline.

## Obsidian
Mostly though, I prefer to manage source content files in the Obsidian workspace.  As the files are directly linked to text files (in markdown md format) on your hard drive, these can easily be uploaded to your GitHub repository (repo) via GitHub Initialize Commands.

## GitHub
We use GitHub as a central repository as our versioning environment and as a carrier for the N&P website. GitHub is our online holding storage area, which we can then pipe out to various different static site generators (SSG), like Retype/GitHub Pages, Flowershow/Vercel and Astro/GitHub Pages or Astro/Netlify. 

## Retype
Retype is a SSG is run on the local machine to generate content which is uploaded to a GitHub repo. Relatively straight forward to execute. Refer [Retype Workflow](/src/content/docs/workflows/Retype-Workflow)

## Astro
Astro is another SSG run on the local machine, which can generate output to several template styles upon project creation (via the command line). Despite some nice looking published files, setting up the environment can be daunting at first, but with familiarity and understanding its quirks (Node JS compatibility especially), this has a lot of flexibility in the design phase. Perhaps too much flexibility. Refer [Astro Workflow](/src/content/docs/workflows/Astro-Workflow)

## Netlify
In future, I plan to push client sites through to Netlify using an Astro project engine. Astro itself is quite a complex framework, so I will test a few Astro builds in GitHub Pages first before venturing out to Netlify, and also eventually Vercel.

## Vercel
I have an account set up in Vercel to handle any publishing requests going through that platform. I have one live website going through them at the moment [this site](https://glorydazeaor.com), but not much else. I need to study up on their various tools to take advantage of them more.

## Syncthing
If you have multiple devices and/or use different operating systems across network (Windows, Mac, Android, iPhone, Linux, RaspberryPi etc), you can use a free app called **Syncthing** to replicate your data among them. This is to mitigate data loss on a single device which could be a single point of failure. Another suggestion is to copy your web page data onto a Server for safe keeping, or onto a portable USB thumb drive.

Syncthing points to your source folder on your source device. On another target device where you have Syncthing installed, run it, the folders from your source device will be detected, now just add them to sync up. Refer our [Syncthing](/src/content/docs/local-env/Syncthing) page.