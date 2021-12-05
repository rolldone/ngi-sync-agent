const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './App.ts',
  mode: "development",
  target: 'node',
  externals: [nodeExternals({
    allowlist: ['serialize-error', /^lodash/, 'http-browserify']
  })],
  // Source maps support ('inline-source-map' also works)
  devtool: 'eval-source-map',
  // devtool: 'source-map',
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ["@babel/plugin-transform-modules-commonjs"]
      //     }
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ["@babel/plugin-transform-modules-commonjs"]
      //     }
      //   }
      // }
    ],
  },
  resolve: {
    extensions: ['.ts', ".js"],
    alias: {
      "@root": path.resolve(__dirname, '')
    },
  },
  output: {
    // chunkFilename: '[name].js',
    filename: 'App.js',
    // path: __dirname
  },
  plugins: [
    new webpack.DefinePlugin({
    }),
    new webpack.ProvidePlugin({

    })
  ]
};