---
author: GeorgeT
title: Sitemap Generation
description: Creating a Sitemap for GitHub Pages
seo: false
tags:
  - sitemap
  - github-pages
created: 2026-08-10
modified: 2026-08-10
---

## Overview
When using GitHub Pages, a sitemap is only created when using a Jekyll theme. For all other static site generators, an GitHub Actions script is required to build the XML file. 

```
name: Generate xml sitemap

on:
  push:
    branches: [ main ]

jobs:
  sitemap_job:
    runs-on: ubuntu-latest
    name: Generate a sitemap

    steps:
    - name: Checkout the repo
      uses: actions/checkout@v4
      with:
        fetch-depth: 0 

    - name: Generate the sitemap
      id: sitemap
      uses: cicirello/generate-sitemap@v1
      with:
        base-url-path: https://THE.URL.TO.YOUR.PAGE/

    - name: Output stats
      run: |
        echo "sitemap-path = ${{ steps.sitemap.outputs.sitemap-path }}"
        echo "url-count = ${{ steps.sitemap.outputs.url-count }}"
        echo "excluded-count = ${{ steps.sitemap.outputs.excluded-count }}"
```

This script needs to be added into each Repo you are working with. 

After generating the sitemap, submit it to **Google Search Console** by navigating to the **Sitemaps** section and entering the filename (e.g., **sitemap.xml**).
