// --------------------------------------------------
// Watch Task
// --------------------------------------------------

var gulp    = require('gulp');
var webpack = require("webpack");

var path = {
  HTML: 'app/index.html',
  ALL: ['app/**/*.jsx', 'app/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/app',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

gulp.task('watch', function() {
  gulp.watch(path.ALL, ['webpack']);
});
