# Sam Havron, 12 December 2016
.PHONY: dev html github new
THEME=academic
MSG=rebuilt site
N=default.md
Y=`date +"%Y"`
S=blog/${Y}
BN=`basename -s .md ${N}`

dev:
	hugo server --theme=$(THEME) --watch

html:
	rm -rf public/
	hugo --theme=$(THEME)
	./plainify.sh

github: html
	git add -A
	git commit -m "${MSG}"
	git push # pre-push hook triggers S3-sync

hogsmeade.zip:
	git archive --format=zip HEAD -o hogsmeade.zip -9v

hogsmeade.tar.gz:
	git archive --format=tar.gz HEAD -o hogsmeade.tar.gz -9v

# see https://github.com/spf13/hugo/issues/452#issuecomment-231558158
new:
	hugo new ${S}/${N} && \
	sed -i '/^date/!s/^.*-//' content/${S}/${N} && \
	sed -i "s/\"*.md/\"${BN}/" content/${S}/${N}
	vi +10 content/${S}/${N}
