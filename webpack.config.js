const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const SERVER_DIR = path.resolve(__dirname, 'server');

const isProd = (process.argv.indexOf('-p') !== -1);

const browserConfig = {
  entry: {
  'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(SRC_DIR, 'app.jsx')
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module : {
    rules : [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
             loader: 'css-loader',
             options: {
                 modules: true,
                 localIdentName: '[hash:base64:5]'
             }
           }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: isProd ? 'source-map' : 'eval',
  devServer: {
    contentBase: SRC_DIR,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(SRC_DIR, 'index.html'),
      filename: 'index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};

const serverConfig = {
  entry: {
  'server' : [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.join(SERVER_DIR, 'index.jsx')
    ]
  },
  target: 'node',
  output: {
    path: BUILD_DIR,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: SERVER_DIR,
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test : /\.jsx?/,
        include : [SERVER_DIR, SRC_DIR],
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
                modules: true,
                localIdentName: '[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = [browserConfig, serverConfig];
