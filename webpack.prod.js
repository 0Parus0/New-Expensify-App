const path = require('path');
// const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

// process.env.NODE_ENV = 'production';
// require('dotenv').config({ path: '.env.production' });

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    publicPath: '/',
    filename: '[name].[contentHash].bundle.js'
  },  
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]((react).*|(react-dom).*|(react-redux).*|(react-router-dom).*|(react-dates).*)[\\/]/,
          // test: /[\\]node_modules[\\]/,
          name: 'react',
          chunks: 'all',
          reuseExistingChunk: true
        },
        moment: {
          test: /[\\/]node_modules[\\/]((moment).*)[\\/]/,
          // test: /[\\]node_modules[\\]/,
          name: 'moment',
          chunks: 'all',
          reuseExistingChunk: true
        },
        redux: {
          test: /[\\/]node_modules[\\/]((redux).*)[\\/]/,
          // test: /[\\]node_modules[\\]/,
          name: 'redux',
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true
    }),
    new OptimizeCSSAssetsPlugin({ 
      cssProcessorOptions: { 
        map: { 
          inline: false,
          annotation: true
        } } 
    }),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
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
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader,
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
  devtool: 'source-map'
});
