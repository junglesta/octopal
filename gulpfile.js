'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');

gulp.task('u', function () {
    return gulp.src('/main.css')
        .pipe(uncss({
            html: ['/index.htm']
        }))
        .pipe(gulp.dest('/uncss/'));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var uncss = require('gulp-uncss');
//
//
// gulp.task('default', function () {
//   return gulp.src('./src/sass/**/*.sass')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./src/css'));
// });
//
// gulp.task('watch', function () {
//   gulp.watch('./src/sass/**/*.sass', ['sass']);
// });
//
//
// gulp.task('uncss', function () {
//     return gulp.src('/src/css/main.css')
//         .pipe(uncss({
//             html: ['/src/index.htm']
//         }))
//         .pipe(gulp.dest('./scr/uncss/'));
// });
