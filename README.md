# Web
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://havron.xyz)

This repository holds the source files that I use to compile the webpages at
<https://havron.xyz>.

## Colophon
The site compiles with [Hugo](https://gohugo.io/),
a static site generator written in [Go](https://golang.org/).

Once compiled, the site's contents are synced to 
[s3](https://aws.amazon.com/s3/) and [cloudfront](https://aws.amazon.com/cloudfront/) on [amazon web services](https://aws.amazon.com/). Take a look at the [Makefile](Makefile) for details.
