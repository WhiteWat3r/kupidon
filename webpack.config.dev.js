const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const getClientEnvironment = require('./config/env');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();

module.exports = (webpackEnv) => {
  const isEnvProduction = webpackEnv === 'production';
  const publicUrlOrPath = process.env.PUBLIC_URL || '/';
  const env = getClientEnvironment(publicUrlOrPath.slice(0, -1));

  return {
    entry: './src/index.tsx',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        publicPath: publicUrlOrPath,
      },
      port: 3000,
      open: publicUrlOrPath,
    },
    infrastructureLogging: { level: 'error' },
    stats: 'minimal',
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx|mjs)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
            },
          },
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.(png|eot|otf|ttf|jpeg|webp|jpg|woff|woff2|svg|gif|mp3|mp4)$/i,
          type: 'asset/resource',
          generator: {
            // adding a hash to the file
            filename: 'images/static/[name].[hash][ext]',
          },
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
      }),
      new Dotenv(),
      new CopyPlugin({
        patterns: [{ from: 'public', to: publicUrlOrPath }],
      }),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: 'public/index.html',
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined,
        ),
      ),
      new InterpolateHtmlPlugin(env.raw),
      new ReactRefreshWebpackPlugin(),
    ],
    devtool: 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      fallback: {
        http: false,
        https: false,
      },
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
      publicPath: publicUrlOrPath,
    },
  };
};
