# Web
[![Build Status](https://travis-ci.org/havron/web.svg?branch=master)](https://travis-ci.org/havron/web)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://havron.xyz)

This repository holds the source files that I use to compile the webpages mirrored across
<https://havron.dev>, <https://havron.xyz> and <https://www.cs.cornell.edu/~havron/>. 

## Colophon
The site's contents compile with [Hugo](https://gohugo.io/), a static site generator written in [Go](https://golang.org/).

Use `make all` to initiate all builds/deployment to each mirror.

As part of the build process, `gulp` minifies and cleans
all CSS/Javascript, and generates service workers for offline browsing 
of the site using a pre-caching strategy (via `sw-precache`).

Once the build process is done (compilation, minifying, and autogenerating the service worker), the site's contents are synced to 
[ghages](https://pages.github.com/) via [Travis CI](https://travis-ci.org/), [s3](https://aws.amazon.com/s3/) and [cloudfront](https://aws.amazon.com/cloudfront/) on [amazon web services](https://aws.amazon.com/). Take a look at the [Makefile](Makefile) for details.
