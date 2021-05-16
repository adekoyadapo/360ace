# 360 Ace Tech

This repo houses the assets used to build the 360ace website, available at https://360ace.net.

## Tools

The website is built and developed using the [Hugo](https://gohugo.io/) static site generator.

Currently the site is under construction and built into an nginx container deployed to a local kubernetes cluster.

## Current Improvements

- Use of [kaniko](https://github.com/GoogleContainerTools/kaniko) as part of CI for container build
- Improvement with CICD with helm templates and fluxcd