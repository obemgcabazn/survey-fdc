'use strict';

var gulp      = require('gulp'),
    livereload  = require('gulp-livereload');


gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('index.html').on('change', livereload.changed);
  gulp.watch('style.css').on('change', livereload.changed);
});

gulp.task(
  'default',
  gulp.series(
    'watch'
  )
);