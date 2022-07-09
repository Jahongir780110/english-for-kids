const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('src', 'js', 'main'),
    category: path.resolve('src', 'js', 'category'),
    statistics: path.resolve('src', 'js', 'statistics'),
    repeat: path.resolve('src', 'js', 'repeat'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['category'],
      filename: 'category.html',
      template: 'src/category.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['statistics'],
      filename: 'statistics.html',
      template: 'src/statistics.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['repeat'],
      filename: 'repeat.html',
      template: 'src/repeat.html',
    }),
    new ESLintPlugin(),
  ],
}
