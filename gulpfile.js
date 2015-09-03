var gulp   = require('gulp'),
    concat = require('gulp-concat-sourcemap');

gulp.task('concat', function () {
    var dependencies = [
      './dependencies/define/src/define.js'
    ];

    gulp.src(dependencies)
      .pipe(concat('dependencies.js'))
      .pipe(gulp.dest('./build/'));
});
