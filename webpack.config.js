const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    port: 3010,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['...', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
