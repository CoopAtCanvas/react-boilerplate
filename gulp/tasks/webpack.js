// --------------------------------------------------
// Webpack Task
// --------------------------------------------------

var gulp          = require('gulp');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var sourcemaps    = require('gulp-sourcemaps');
var webpack       = require("webpack");
var webpackConfig = require("../../webpack.config.js");
var stream        = require('webpack-stream');

var path = {
  HTML: 'app/index.html',
  ALL: ['app/**/*.jsx', 'app/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/app',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

gulp.task('webpack', [], function() {
  return gulp.src(path.ALL)
    .pipe(sourcemaps.init())
    .pipe(stream(webpackConfig))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.DEST_BUILD));
});
