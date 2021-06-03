import { merge } from 'webpack-merge';
import webpackCommonConfig, { cssLoaders } from './webpack.common';

const webpackDevConfig = merge(webpackCommonConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', ...cssLoaders],
      },
    ],
  },
});

export default webpackDevConfig;
