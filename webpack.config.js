//for linking index.html to transformed.js
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  // configuration
  //templete: which file
  //filename: tHTMLWebpackPluginransformed file name
  //inject: where to inject transformed file's script tag
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  //entrY: what is the entry point/which file(s) to be transformed
  entry: __dirname + '/app/index.js',
  module: {
    //test: in the journey of transforming, what all files will be transformed
    //exclude: what has to be excluded from the transformation
    //loader: can be an array, what arethe trasnformers
    rules: [
        {
          test:/\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
    ]
  },
  output: {
    //name & where to output the transformed file
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig],
  mode: 'development'
};
