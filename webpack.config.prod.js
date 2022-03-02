const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './App.ts',
  mode: "production",
  target: 'node',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', ".js"],
    alias: {
      "@root": path.resolve(__dirname, '')
    },
    modules: ["node_modules", "bower_components"],
  },
  output: {
    filename: 'App.js'
  },
  plugins: [
    new webpack.DefinePlugin({}),
    new webpack.ProvidePlugin({})
  ]
};