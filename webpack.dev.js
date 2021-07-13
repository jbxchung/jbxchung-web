/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 17713,
    publicPath: 'http://localhost:17713/dist/',
    historyApiFallback: true,
    disableHostCheck: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
