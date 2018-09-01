'use strict';

var gulp      = require('gulp'),
    livereload  = require('gulp-livereload');


gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('*.html').on('change', livereload.changed);
  gulp.watch('style.css').on('change', livereload.changed);
  gulp.watch('frontend/sass/*.sass', gulp.series('sass'));
});

gulp.task('sass', function () {
  return gulp.src('sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('/'));
});

gulp.task(
  'default',
  gulp.series(
    'watch'
  )
);