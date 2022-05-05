/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 17713,
    historyApiFallback: true,
    allowedHosts: 'all',
  },
});
