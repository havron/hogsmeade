# Sam Havron, 12 December 2016
.PHONY: all xyz dev edu xyzcompile devcompile educompile github aws cornell
THEME=academic
CNAME=havron.xyz
DISTRIBUTION_ID=EBRLR8UIL2LHP
MSG=rebuilt ${CNAME}

xyz:
	hugo server --theme=$(THEME) --watch --buildDrafts --config config.xyz.toml
dev:
	hugo server --theme=$(THEME) --watch --buildDrafts --config config.dev.toml

edu:
	hugo server --theme=$(THEME) --watch --buildDrafts --config config.edu.toml

all: aws ghpages cornell

xyzcompile:
	gulp xyzbuild
	find public/ -type f -exec sed -i 's/_blank">/_blank" rel="noopener">/g' {} +
	./plainify.sh

devcompile:
	gulp devbuild
	find public/ -type f -exec sed -i 's/_blank">/_blank" rel="noopener">/g' {} +
	./plainify.sh

educompile:
	gulp edubuild
	find public/ -type f -exec sed -i 's/_blank">/_blank" rel="noopener">/g' {} +
	./plainify.sh

github: xyzcompile
	# git diff --name-only > cdn.invalidate # 
	# needs to look inside public/ for this to work! (.gitignore)
	git add -A
	git commit -m "${MSG}"
	git push origin master

ghpages: devcompile

aws: github
	@echo "\nSyncing to ${CNAME} on Amazon Web Services...\n\n"
	aws s3 sync --acl public-read --sse AES256 public/ s3://${CNAME}/ 
	@echo "\nInvalidating all cache for ${CNAME} on Amazon Web Services...\n\n"
	aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths /\*
	@ # ^^^ not ideal! should only invalidate modified files...
	@ # aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths $(shell cat cdn.invalidate | tr "\n" " ") # needs to look inside public/ for this to work!

RSYNCARGS := --compress --recursive --checksum --itemize-changes \
	--delete -e ssh
DEST := cslinux:/people/sgh65/

cornell: educompile
	# vpnc-connect, first, if not on campus
	rsync $(RSYNCARGS) public/ $(DEST)

${CNAME}.zip:
	git archive --format=zip HEAD -o $@ -9v

${CNAME}.tar.gz:
	git archive --format=tar.gz HEAD -o $@ -9v
