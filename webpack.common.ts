import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Configuration } from 'webpack';

export const cssLoaders = [
  { loader: 'css-loader', options: { importLoaders: 1 } },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['postcss-preset-env', 'tailwindcss'],
      },
    },
  },
];

const webpackCommonConfig: Configuration = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: /\.[tj]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        // https://regex101.com/r/gKqUIc/2
        issuer: /^(?!.*\.[tj]sx?$).*$/,
        loader: 'url-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    // path: path.join(__dirname, '/dist'),
    path: path.resolve('./dist'),
    filename: '[name].[fullhash:8].js',
  },
};

export default webpackCommonConfig;
