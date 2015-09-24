var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('build:base', function () {
  gulp.src([
      './src/angular-mdl.base.js',
      './src/angular-mdl.base/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('angular-mdl.base.js'))
    .pipe(gulp.dest('./dist/'));

  gulp.src([
      './src/angular-mdl.base.js',
      './src/angular-mdl.base/*.js'
    ])
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('angular-mdl.base.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('build', ['build:base'], function () {

  gulp.src([
      './src/angular-mdl.base.js',
      './src/angular-mdl.base/*.js',
      './src/angular-mdl.js',
      './src/angular-mdl/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('angular-mdl.js'))
    .pipe(gulp.dest('./dist/'));

  gulp.src([
      './src/angular-mdl.base.js',
      './src/angular-mdl.base/*.js',
      './src/angular-mdl.js',
      './src/angular-mdl/*.js'
    ])
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('angular-mdl.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('default', ['build']);