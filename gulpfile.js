'use strict';

var gulp      = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    order = require('gulp-order'),
    livereload  = require('gulp-livereload');


gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('*.html').on('change', livereload.changed);
  gulp.watch('*.js').on('change', livereload.changed);
  gulp.watch('style.css').on('change', livereload.changed);
  gulp.watch('sass/*.sass', gulp.series('sass'));
});

gulp.task('sass', function () {
  return gulp.src('sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

gulp.task(
  'default',
  gulp.series(
    'watch'
  )
);