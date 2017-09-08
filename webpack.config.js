const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.join(SRC_DIR, 'app');

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
        loader: ["babel-loader"]
      }
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  devServer: {
    contentBase: './src',
    hot: true
  },
  
  plugins: [new HtmlWebpackPlugin({
      hash: true,
      template: path.join(SRC_DIR, 'index.html'),
      filename: 'index.html'
    })]
    
};

module.exports = config;