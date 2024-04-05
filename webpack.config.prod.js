const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const getClientEnvironment = require('./config/env');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

module.exports = (webpackEnv) => {
  const isEnvProduction = webpackEnv === 'production';
  const publicUrlOrPath = process.env.PUBLIC_URL || '/';
  const env = getClientEnvironment(publicUrlOrPath.slice(0, -1));

  return {
    entry: './src/index.tsx',
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
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
      new Dotenv(),
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            globOptions: {
              dot: true,
              gitignore: true,
              ignore: ['**/index.html'],
            },
          },
        ],
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
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
  };
};
