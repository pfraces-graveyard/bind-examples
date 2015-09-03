var gulp   = require('gulp'),
    concat = require('gulp-concat-sourcemap');

gulp.task('concat', function () {
  var dependencies = [
    './dependencies/define/src/define.js',
    './dependencies/**/src/*.js'
  ];

  gulp.src(dependencies)
    .pipe(concat('dependencies.js', { sourcesContent: true }))
    .pipe(gulp.dest('./build/'));

  gulp.src('./src/**/*.js')
    .pipe(concat('app.js', { sourcesContent: true }))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy', function () {
  gulp.src(['./src/index.html', './src/styles.css'])
    .pipe(gulp.dest('./build'));
});
