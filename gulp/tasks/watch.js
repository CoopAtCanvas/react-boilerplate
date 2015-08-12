// --------------------------------------------------
// Watch Task
// --------------------------------------------------

var gulp    = require('gulp');
var webpack = require("webpack");

var path = {
  HTML:         'public/index.html',
  ALL:         ['app/**/*.jsx', 'app/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC:     'app',
  DEST_BUILD:   'public',
  DEST:         'public'
};

gulp.task('watch', function() {
  gulp.watch(path.ALL, ['webpack']);
});
