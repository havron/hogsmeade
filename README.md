# Web
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://havron.xyz)

This repository holds the source files that I use to compile the webpages at
<https://havron.xyz> and <https://www.cs.cornell.edu/~havron/>. 

## Colophon
The site's contents compile with [Hugo](https://gohugo.io/), a static site generator written in [Go](https://golang.org/).
I use `make` to handle deployment, which in turn calls `gulp` to minify
CSS/Javascript, and generate service workers using `sw-precache`.

Once the build process is done (compilation, minifying, and autogenerating the service worker), the site's contents are synced to 
[s3](https://aws.amazon.com/s3/) and [cloudfront](https://aws.amazon.com/cloudfront/) on [amazon web services](https://aws.amazon.com/). Take a look at the [Makefile](Makefile) for details.
