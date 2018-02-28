#/bin/sh
echo "Initialize build tools, needs working NPM installation to run"
npm install --save-dev sw-precache
npm install --save-dev run-sequence
npm install gulp-batch
npm install gulp-clean-css
npm install gulp-concat gulp-rename gulp-uglify --save-dev
#npm install gulp
#npm install --global gulp
