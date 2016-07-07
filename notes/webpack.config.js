const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },
  plugins: [
  new HtmlWebpackPlugin({
    favicon:path.join(__dirname,'src/favicon.ico'),
    title: 'vue notes',
    template: path.join(__dirname,'src/index.html'),
    inject: true
  }),
  new ExtractTextPlugin('[hash:6].style.css', { allChunks: true })
],
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue', include: path.join(__dirname, 'src') },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
