var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browser_sync = require('browser-sync'),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    csso = require("gulp-csso");

gulp.task('style', function() {
  return gulp.src('app/sass/**/*.sass')
  .pipe(sass())
  .pipe(csso())
  .pipe(concat('app.css'))
  .pipe(gulp.dest('app/dist'))
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

gulp.task("js", function () {
  return gulp.src("app/js/*.js")
    .pipe(babel({
			presets: ['es2015']
		}))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest("app/dist"));
});

gulp.task('watch', ['browser-sync', 'style', 'js'], function() {
  gulp.watch('app/sass/**/*.sass', ['style']);
  gulp.watch('app/*.html', browser_sync.reload)
  gulp.watch('app/js/**/*.js', ['js'])
  gulp.watch('app/dist/*.js', browser_sync.reload)
});
