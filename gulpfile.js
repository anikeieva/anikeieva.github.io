var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browser_sync = require('browser-sync'),
    babel = require("gulp-babel");

gulp.task('sass', function() {
  return gulp.src('app/sass/**/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browser_sync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browser_sync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browser_sync.reload)
  gulp.watch('app/js/**/*.js', browser_sync.reload)
});

gulp.task("default", function () {
  return gulp.src("app/js/*.js")
    .pipe(babel({
			presets: ['es2015']
		}))
    .pipe(gulp.dest("app/js5"));
});
