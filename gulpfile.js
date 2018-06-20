'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./src"
    });
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
