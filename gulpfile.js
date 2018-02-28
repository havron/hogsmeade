var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('child_process').execSync;
var runSequence = require('run-sequence');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('styles', () => {
  return gulp.src(['static/css/*.css','!static/css/*.old.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('scripts', function() {
    return gulp.src('static/js/*.js')
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    /** This is the place where you could change / make the patterns on which files should be going into precache **/
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,eot,svg,ttf,woff,woff2,otf}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('hugo:build', function() {
	var result = exec("hugo", {encoding: 'utf-8'});
    gutil.log('hugo:build: \n' + result);
    return result;
});

gulp.task('hugo:builddrafts', function() {
  var result = exec("hugo --buildDrafts", {encoding: 'utf-8'});
    gutil.log('hugo:builddrafts: \n' + result);
    return result;
});

gulp.task('hugo:clean', function() {
	var result = exec("rm -rf public/", {encoding: 'utf-8'});
    gutil.log('hugo:clean: \n' + result);
    return result;
});

gulp.task('build', function(callback) {
  runSequence('hugo:clean',
              'hugo:build',
							'scripts',
              'styles',
              'generate-service-worker',
              callback);
});

gulp.task('build:drafts', function(callback) {
  runSequence('hugo:clean',
              'hugo:builddrafts',
              'generate-service-worker',
              callback);
});
