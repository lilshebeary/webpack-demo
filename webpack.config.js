const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  // devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "[main].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader"
        ]
      }
    ]
  }
};