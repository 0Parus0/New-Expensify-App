const path = require('path');

const webpack = require('webpack');


const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');


process.env.NODE_ENV = process.env.NODE_ENV || 'development' || 'production';

if (process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line global-require
  require('dotenv').config({ path: '.env.test' });
} else {
  // eslint-disable-next-line global-require
  require('dotenv').config({ path: '.env.dev-prod' });
}


module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/app.js']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true }
        }
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    }),
    new CopyPlugin([
      {
        from: 'src/images/*',
        to: 'public/dist/',
        flatten: true
      }
    ])
  ] 
};
