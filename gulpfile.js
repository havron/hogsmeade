var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('child_process').execSync;
var runSequence = require('run-sequence');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var purify = require('gulp-purifycss');

gulp.task('styles', () => {
  return gulp.src(['static/css/*.css','!static/css/*.old.css'])
    .pipe(concat('style.min.css'))
    .pipe(purify(['public/**/*.js', 'public/**/*.html']))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('xyzscripts', function() {
    return gulp.src(['static/js/*.js','!static/js/*.edu.js'])
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('devscripts', function() {
    return gulp.src(['static/js/*.js','!static/js/*.edu.js'])
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('eduscripts', function() {
    return gulp.src(['static/js/*.js','!static/js/*.xyz.js'])
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('xyzgenerate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    /** This is the place where you could change / make the patterns on which files should be going into precache **/
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,eot,svg,ttf,woff,woff2,otf}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('devgenerate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    /** This is the place where you could change / make the patterns on which files should be going into precache **/
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,eot,svg,ttf,woff,woff2,otf}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('edugenerate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    /** This is the place where you could change / make the patterns on which files should be going into precache **/
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,eot,svg,ttf,woff,woff2,otf}'],
    stripPrefix: rootDir,
    replacePrefix: '/~havron'
  }, callback);
});

gulp.task('hugo:xyzbuild', function() {
	var result = exec("hugo --config config.xyz.toml", {encoding: 'utf-8'});
    gutil.log('hugo:build: \n' + result);
    return result;
});

gulp.task('hugo:devbuild', function() {
var result = exec("hugo --config config.dev.toml", {encoding: 'utf-8'});
    gutil.log('hugo:build: \n' + result);
    return result;
});

gulp.task('hugo:edubuild', function() {
	var result = exec("hugo --config config.edu.toml", {encoding: 'utf-8'});
    gutil.log('hugo:build: \n' + result);
    return result;
});

gulp.task('hugo:builddrafts', function() {
  var result = exec("hugo --buildDrafts --config config.xyz.toml", {encoding: 'utf-8'});
    gutil.log('hugo:builddrafts: \n' + result);
    return result;
});

gulp.task('hugo:clean', function() {
	var result = exec("rm -rf public/", {encoding: 'utf-8'});
    gutil.log('hugo:clean: \n' + result);
    return result;
});

gulp.task('xyzbuild', function(callback) {
  runSequence('hugo:clean',
              'hugo:xyzbuild',
              'xyzscripts',
              'styles',
              'xyzgenerate-service-worker',
              callback);
});

gulp.task('devbuild', function(callback) {
  runSequence('hugo:clean',
              'hugo:devbuild',
              'devscripts',
              'styles',
              'devgenerate-service-worker',
              callback);
});

gulp.task('edubuild', function(callback) {
  runSequence('hugo:clean',
              'hugo:edubuild',
              'eduscripts',
              'styles',
              'edugenerate-service-worker',
              callback);
});

gulp.task('build:drafts', function(callback) {
  runSequence('hugo:clean',
              'hugo:builddrafts',
              'generate-service-worker',
              callback);
});
