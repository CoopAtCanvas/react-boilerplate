var path = require('path');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'eval',
  entry: './app/App.js',
  output: {
    path: path.join(__dirname, "build"),
    filename: 'build.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
  module: {
    loaders: [
      { test: /\.js$/,   loaders: ['jsx', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") }
    ]
  }
};
