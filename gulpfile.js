'use strict';

// Dependencies (to be NPM installed)
var gulp = require('gulp'),
        sass = require('gulp-sass'),
        minifyCSS = require('gulp-minify-css');

// Sass Compile
gulp.task('src', function() {
    gulp.src('./scss/main.scss')
        .pipe(sass({
            errLogToConsole: true,
            includePaths: ['./scss/**']
        }))
        .pipe(gulp.dest('./scss'));    
});

// Minify sourced main.css
gulp.task('min', function() {
    gulp.src('./scss/main.css')
        .pipe(minifyCSS({
            keepBreaks: false,
            keepSpecialComments: true
        }))
        .pipe(gulp.dest('./src/css'));
});

// Watch files
gulp.task('watch', function() {
    var compile = ['src', 'min'];
    gulp.watch(['./scss/main.scss'], ['src']);
    gulp.watch(['./scss/*/*.scss'], ['src']);
    gulp.watch(['./scss/main.css'], ['min']);
        // gulp-minifiy-css watches for changes to the compiled
        // scss file to ensure asynchronous behaviour.
});
// Run: gulp sass
gulp.task('sass', ['src', 'min', 'watch']);