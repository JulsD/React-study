const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.join(SRC_DIR, 'app');

const isProd = (process.argv.indexOf('-p') !== -1);

const config = {
  entry: path.join(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader: ['react-hot-loader', 'babel-loader']
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
  devServer: {
    contentBase: SRC_DIR,
    hot: true,
    historyApiFallback: true
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

if(isProd) {
  config.devtool = 'source-map';
}

module.exports = config;
