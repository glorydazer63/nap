---
author: GeorgeT
title: single-user-or-multi-user-access
description: Static website as single or multi user access
seo: false
tags:
  - client-access
created: 2026-08-25
modified: 2026-08-25
---

## Static Website Access
Most static websites are set up as a single user access point, due mainly to the design of the static infrastructure, which does not cater for multi user accessibility. Unlike platforms like WordPress, Jolmla, Drupal, Wikipefia, DokuWiki or Forum software (like Flarum, Discord etc).

Bear this in mind when asking for a static website to be built and not being able to access it if another party (external Web developer) has built it.

## Exceptions
Yes there are exceptions, let's look at a few of these.

### DeCap CMS (formerly Netlify CMS)
Decap is a popular and free content management system specialising in static website deployment with the ability to have a team based structure where the developer side and the client side are kept separate though still within the same repository.

This approach has merit, as the Repo can be managed in the same way when being pushed to a GitHub environment, and then being published to the web platform of your choice (GitHub Pages, Netlify, Vercel, Cloudflare etc).

I have yet to undertake a complete workflow test for this, but expect to have it completed by early September 2026. Watch this space.

### Netlify Teams
If a static website is being pushed through to Netlify via GitHub, then the website becomes a project within Netlify, allowing for the Netlify account holder (whether the developer or the client) to add different people to the project, and to give them specific roles (admin, editing, publishing online etc).

This can be a complex issue because of version control issues, and synchronising the data between developer source code (via git pull commands), GitHub version control and Netlify post publishing and editing. These are three specific environments which need to be synchronised at all times. It can get messy but it is doable.

## Ownership
There are two relationships to consider when wanting a static website built:

- the client themselves arrange their own Git repository and their own publishing backend, as in setting up their own GitHub Pages, Netlify, Vercel or Cloudflare account, and then invite the Developer in as a technical resource.
- if the developer organises everything, then it's the other way around.

From a business continuity perspective, it is probably better that the client brings everything under their own umbrella. If this is not possible, then the Developer can set it up, do the work, then transfer all the undertaken work activity and transfer it from firstly,  within GitHub and then within the Publishing backend, as per Netlify as an example.