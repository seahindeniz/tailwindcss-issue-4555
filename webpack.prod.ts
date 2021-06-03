/* eslint-disable import/first */
delete process.env.TS_NODE_PROJECT;

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import webpackCommonConfig, { cssLoaders } from './webpack.common';

process.env.NODE_ENV = 'production';

const config: Configuration = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, ...cssLoaders],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[fullhash:8].css',
      chunkFilename: 'styles.[fullhash:8].css',
    }),
  ],
  output: {
    chunkFilename: '[name].[fullhash:8].js',
  },
};
const webpackDevConfig = merge(webpackCommonConfig, config);

export default webpackDevConfig;
