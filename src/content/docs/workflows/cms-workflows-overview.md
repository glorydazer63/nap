---
author: georget
title: CMS-Workflows-Overview
description: CMS Workflows Overview
created: 2026-07-23
modified: 2026-08-05
---

The workflows described below are examples of website construction methods applied using a combination of static site generators (SSG's) back ended into large scale repositories. Some of these we use, others we don't, though one day we might get to them.

## We Use
### Flowershow
- Uses Obsidian.
- Publish plugin drives everything through Flowershow portal (then to Vercel repository)
- Works well.
- Not really suited to multi-client online access though.
- Cheap monthly access US$5.00. Required for customised domains and/or very large content sites.
- Has a free published platform (user-site.flowershow.me).
- Not many themes avaliable. You'd be best creating your own customised CSS.

### Astro
- Uses Obsidian for source content and editing.
- Uses its own Obsidian Vault.
- Requires a full Astro, Node JS implementation on the local machine, Refer 'Astro Workflow' in the left side bar under **Workflows**.
- Can back end to various repositorues. Netlify, Vercel and Cloudflare are popular options.
- If using Starlight Docs as an eventual front end, it requires careful editing because it is quite strict for conformity.
- If pumping out to Netlify, the Repo project maybe adapted to for multi user access. Need to work on that.

### Retype
- Used mostly for technical documentation rather than personal blogs. 
- Probably the smoothest and easiest to deploy 'Static Site Generator'.
- Run from Git initialize scripts to upload to chosen GitHub repo.
- Requires a Retype Publish GitHub Action script (Yaml).
- Go to the Repo's Pages setting. Select Source and Branch to publish online content. Nice.
- Apparently can integrate into 'Jekyll' themes, though this looks very fiddly, and many of the free themes are uninspring. Will need to test it.

## We Don't Use Yet
### Framer
- Has significant AI functionality. ?
- Best used with online access to a Desktop environment. Have tried with Android mobile, but a bit clunky.
- Free tier available.
- Still assessing the configs options.

### Publii
- Integrates with Netlify, GitHub Pages, TinyHost, Cloudflare.
- Big showstopper - is not multi user capable. 

### TinaCMS
- Allows for 2 multi users on the free tier plan. 
- We might get to this eventually, as it integrates into Netlify quite nicely.