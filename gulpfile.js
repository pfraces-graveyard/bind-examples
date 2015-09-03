var gulp   = require('gulp'),
    concat = require('gulp-concat-sourcemap'),
    eslint = require('gulp-eslint')
    del    = require('del');

gulp.task('clean', function () {
  return del('output');
});

gulp.task('lint', ['clean'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('scripts', ['lint'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(concat('app.js', { sourcesContent: true }))
    .pipe(gulp.dest('./output/'));
});

gulp.task('styles', ['lint'], function () {
  return gulp.src('./src/styles.css')
    .pipe(gulp.dest('./output/'));
});

gulp.task('index', ['lint'], function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./output/'));
});

gulp.task('dependencies', ['lint'], function () {
  var dependencies = [
    './dependencies/define/src/define.js',
    './dependencies/**/src/*.js'
  ];

  return gulp.src(dependencies)
    .pipe(concat('dependencies.js', { sourcesContent: true }))
    .pipe(gulp.dest('./output/'));
});

gulp.task('build', ['scripts', 'styles', 'index', 'dependencies']);
