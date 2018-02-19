# Sam Havron, 12 December 2016
.PHONY: dev compile github new aws
THEME=academic
CNAME=havron.xyz
DISTRIBUTION_ID=EBRLR8UIL2LHP
MSG=rebuilt ${CNAME}

dev:
	hugo server --theme=$(THEME) --watch

compile:
	rm -rf public/
	hugo --theme=$(THEME)
	./plainify.sh

github: compile
	git add -A
	git commit -m "${MSG}"
	git push

aws: github
	aws s3 sync --no-guess-mime-type --acl "public-read" --sse "AES256" public/ s3://${CNAME}/
	aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths `git diff --name-only`

${CNAME}.zip:
	git archive --format=zip HEAD -o $@ -9v

${CNAME}.tar.gz:
	git archive --format=tar.gz HEAD -o $@ -9v
