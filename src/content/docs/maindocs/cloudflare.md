---
author: GeorgeT
title: Cloudflare
description: Optional, Setting up Cloudflare
seo: false
tags:
  - cloudflare
created: 2026-07-07
modified: 2026-08-10
---

## Introduction
Cloudflare is a large scale ecosystem categorized as a CDN (Content Delivery Network). In the scope of static websites, it can also deliver such content on their network through two methods:

- content can be managed directly using Cloudflare's own infrastructure. 
- content can be passed through Cloudflare's system as a proxy, whereby an account holder/client can retain their own customised domain and simply pass their content via a CNAME redirect from their own host DNS Records. 

## Cloudflare Platform
Depending on the extent of the clients requirements (website scope, size etc), a static website can take advantage of Cloudflare's ecosystem particularly if the website is large, and global reach is important.

### AI and LLM Access
Cloudflare has a tool that either allows or disallows access to Search bots plus AI and LLM bots. 

Displays are also available to see where website visitors are coming from.

I won't go into too much detail as to what is required because it is a bit technical, but if clients are interested, then they contact me on the [Contact](/docs/general/contact) page.

### SEO Consideration
Cloudflare uses agents to ensure content passed through it will be picked up for SEO. Selected Search/Index bots are switched on (Google, Bing, Apple etc) enabling all latest files generated in the websites sitemap are made available to the approved search bots.

## Making Changes on your Customised Domain
If you have a customised domain and wish to dovetail into Cloudflare's infrastructure, there is one thing Cloudflare requires of you, and it is to update your name server references on your Web host to Cloudflare's, via the Hosted Domain section.

### Changing Name Servers
Web Hosts usually have 4 DNS name server slots. DNS1 and DNS2 should remain unchanged, as you will still require your customised domain for things such as Email (Cloudflare does not support in-house email services). DNS3 and DNS4 should be changed to Cloudflare's name servers. At last check, thee were:

- DNS3 =adaline.ns.cloudflare.com
- DNS4 = melnicoff.ns.cloudflare.com

### CName Reference
Once Cloudflare takes control of your customised domain, you should be able to make changes to your web domain within it, including setting up a non-proxy CNAME reference.
