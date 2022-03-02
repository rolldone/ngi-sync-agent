const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './App.ts',
  mode: "development",
  target: 'node',
  externals: [nodeExternals({
    excludeFromBundle:["fsevents"],
    allowlist: ['serialize-error', /^lodash/, 'http-browserify', "minimist",
      // "has-flag",
      // "chokidar",
      // "async",
      // "axios",
      // "chalk",
      // "chokidar",
      // "eventemitter2",
      // "inquirer",
      // "moment-timezone",
      // "named-routes",
      // "observatory",
      // "uberproto",
      // "upath",
      // "ansi-escapes",
      // "ansi-styles",
      // "anymatch",
      // "braces",
      // "cli-cursor",
      // "cli-width",
      // "escape-string-regexp",
      // "events",
      // "external-editor",
      // "figures",
      // "follow-redirects",
      // "glob-parent",
      // "has-ansi",
      // "is-binary-path",
      // "is-glob",
      // "methods",
      // "moment",
      // "mute-stream",
      // "normalize-path",
      // "ora",
      // "path-to-regexp",
      // "readdirp",
      // "run-async",
      // "rxjs",
      // "rxjs/operators",
      // "string-width",
      // "strip-ansi",
      // "supports-color",
      // "through",
      // "xregexp",
      // "assert",
      // "fs",
      // "http",
      // "https",
      // "path",
      // "readline",
      // "url",
      // "util",
      // "zlib",
    ]
  })],
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