const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const {
  env
} = require("process");
const devMode = env.NODE_ENV !== 'production';

/* 
const plugins = [];
if (!devMode) {
  // enable in production only
  plugins.push(new MiniCssExtractPlugin());
}

new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: "css/main.css",
    }),*/

module.exports = {
  mode: env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: 'source-maps',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: false,
      timings: false,
      version: false,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Backbone boilerplate with webpack",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [{
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        // apply eslint on .js files
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        // load .scss files
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', "css-loader", "sass-loader"
        ],
      }
    ],
  },
};