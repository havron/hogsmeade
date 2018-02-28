+++
Headline = "subdomains"
Title = "subdomains"
Description = ""
Tags = []
pre = "subway"
Categories = []
2016 = "11"
reddit_comment_code = ""
reddit_underscored_name = ""
fn = ".md"
+++

One of the more compelling reasons to manage a [personal
domain](https://havron.xyz) 
rather than depending on [/~academic/
webpages](https://www.cs.cornell.edu/~havron/) is the ability to easily create 
subdomains and link them to dynamic and static backend servers, RESTful lambda gateways, and so forth. 
All of my publicly-exposed subdomains are as follows; no need to run that hacky
dig/nmap/superstarred {{<fa github >}} script...

<span style="font-size: 40px; font-family: 'Lato', sans-serif;  font-weight: 700">Subdomains currently maintained</span>
<ul class="ul-interests fa-ul">

<li>
<i class="fa-li fa fa-hand-o-right"></i>
[`havron.xyz`](https://havron.xyz); home of my personal webpages. It's hosted on
static S3 buckets and the CloudFront CDN.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
[`sam.havron.xyz`](https://sam.havron.xyz); a mirror of my personal webpages. I
suspect this may become the default home for them in the future.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
[`www.havron.xyz`](https://www.havron.xyz); deployed only for [legacy purposes](https://xkcd.com/181/), this subdomain merely re-directs 
to `havron.xyz`.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`m.havron.xyz`; my [mailgun](https://www.mailgun.com/)
API endpoint. It's what allows my [personal email addresses](/email/) to be
routed.
</li>
</ul>

<span style="font-size: 40px; font-family: 'Lato', sans-serif;  font-weight: 700">Some subdomains I'd like to add in the future!</span>
<ul class="ul-interests fa-ul">

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`oreo.havron.xyz`; home of my cat's personal webpages. It'll probably feature a
slide-show of sorts.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`api.havron.xyz`; a RESTful, likely
[server-less](https://en.wikipedia.org/wiki/Serverless_computing) gateway to
integrate redundant dynamic services as needed across my other subdomains (e.g.
authentication tokens).
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`{git,gitlab}.havron.xyz`; in case GitHub/BitBucket become "too social" for hosting
repositories, a GitLab/git server is in order.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`blog.havron.xyz`; this [already exists](https://havron.xyz/blog) as a subdirectory on my personal 
webpages, but it may need to move at some point. I'm mostly [on
Medium](https://medium.com/@samhavron) at
this point.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`quotes.havron.xyz`; a place to submit and display silly quotes pertaining to my
friends and family (with permission). Probably only accessible to them.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`grade.havron.xyz`; potentially an appropriate place to host a [dockerized
auto-grader](https://ianpudney.com/autograder-audit/paper/autograder-audit.pdf). 
Understandably though, most universities require grading resources to be hosted solely on domains under their 
jurisdiction.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`<class>.havron.xyz`; a place to put materials for classes I might have the
chance to teach. Probably just an alias for a static mirror on `<class>.github.io`.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`*.<project>.havron.xyz`; home for relevant projects, tools, and other public services to run (likely dynamic).
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`sandbox.<project>.havron.xyz`; an internal developer view of relevant projects, tools,
and other public services to run in production.
</li>

<li>
<i class="fa-li fa fa-hand-o-right"></i>
`random.havron.xyz`; even I don't know what happens when you visit this
subdomain :-)
</li>

</ul>
