const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');

const common = require('./webpack.common.js');

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// if (process.env.NODE_ENV === 'test') {
//   // eslint-disable-next-line global-require
//   require('dotenv').config({ path: '.env.test' });
// } else if (process.env.NODE_ENV) {
//   // eslint-disable-next-line global-require
//   require('dotenv').config({ path: '.env.development' });
// }

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public', 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      template: './src/index.html',
      filename: './index.html'
    })
    // new webpack.DefinePlugin({
    //   'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
    //   'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
    //   'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
    //   'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
    //   'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
    //   'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
    //   'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public', 'dist'),
    historyApiFallback: true,
    overlay: true,
    hot: true,
    port: 8081
  }
});
