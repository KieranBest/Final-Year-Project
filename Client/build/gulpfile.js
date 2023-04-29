"use strict";

var gulp = require('gulp');
var htmltidy = require('gulp-htmltidy');
var autoprefixer = require('gulp-autoprefixer');
var csslint = require('gulp-csslint');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
gulp.task('html', function () {
  return gulp.src('./*.html') // your html directory
  .pipe(htmltidy()).pipe(gulp.dest('build/')); //writes the output, cleanly formatted HTML to the build directory
});

gulp.task('css', function () {
  return gulp.src('./*.css') //your css directory
  .pipe(csslint()).pipe(csslint.formatter()).pipe(autoprefixer({
    browsers: ['last 5 versions'],
    //config to add prefixes to work on older browsers
    cascade: false
  })).pipe(gulp.dest('./build'));
});
gulp.task('js', function () {
  return gulp.src('./*.js') //directory of your .js file
  .pipe(jshint()).pipe(jshint.reporter('default')).pipe(babel({
    presets: ['@babel/env']
  })).pipe(gulp.dest('./build'));
});
// mdn Web Docs (2023) [Introduction to automated testing | MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)

gulp.task("watch", function () {
  gulp.watch("./src/*.js").on("change", function (event) {
    gulp.src(dirs.src).pipe(browserify({
      transform: [babelify.configure({
        presets: ["@babel/preset-env"]
      })]
    })).pipe(rename("bundle.js")).pipe(gulp.dest(dirs.dest));
  });
});
gulp.task('default', gulp.series('html', 'css', 'js'));

// When initiated creates the build folder and copies the files from the src folder to the build folder