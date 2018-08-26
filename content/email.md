+++
Headline = ""
Tags = [
]
Categories = [
]
2016 = "11"
pre = "envelope"
fn = ".md"
date = "2017-09-03T17:19:34-04:00"
Description = ""
reddit_comment_code = ""
reddit_underscored_name = ""
title = "e-mail"

+++
# _Use any of these to contact me:_
`sgh65@cornell.edu`

`havron@cs.cornell.edu`

`sam@havron.xyz`

`s@m.havron.xyz` ([domain hack](http://xona.com/2004/11/03.html))


## Shouldn't I be obfuscating my above addresses in some fashion?
My addresses are easily harvested; for now,
I allow this because I want to build a better understanding of the detriments
 of obfuscation strategies to user-friendliness (including 
[JS environment assumptions](https://softwareengineering.stackexchange.com/questions/26179/why-do-people-disable-javascript)) 
before committing to deploying one.
The ultimate necessity of obfuscation is also [unclear to
me](https://www.theguardian.com/technology/2010/dec/21/keeping-email-address-secret-spambots).

Most harvesters use sophisticated regex (and in the
case of addresses embedded in images, OCR)
techniques to reconstruct e-mail addresses. More deep-pocketed adversaries might
**simply hire humans on Amazon's Mechanical Turk as harvesters**, which breaks virtually all obfuscation strategies!

### More Optimal Obfuscation Strategies
For anyone interested in playing the e-mail obfuscation game, 
there's a [myriad of
strategies](https://superuser.com/questions/235937/does-e-mail-address-obfuscation-actually-work)
 that often trade user-friendliness for 
stronger obfuscation guarantees (e.g. e-mail addresses hidden behind Google CAPTCHAs seem pretty robust, but are a burden on legitimate users).

Short of only inviting people to contact me, I have not 
come up with a reliable and user-friendly obfuscation strategy 
to protect myself from the inevitable crowd-source-powered (human) harvesters. 
My strategy would likely entail a written description of how to construct my address,
described in a way that is sufficiently difficult for state-of-the-art NLP techniques to solve,
and such that there is a way for the construction to distinguish between legitimate users and human harvesters. 

Have a great strategy in mind? Let's chat!
