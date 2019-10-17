const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ExtractHTMLWebpackPlugin = new HTMLWebpackPlugin({
  title: 'App',
  template:  path.resolve(__dirname + '/client/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const ExtractTextPluginStyles = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

const isDevBuild = () => {
  return (process.env.NODE_ENV === 'development');
};
const ExtractUglifyJSPlugin =  new UglifyJSPlugin({include: /\/client/}, {sourceMap: true});
 
const DefineProd = new webpack.DefinePlugin({'process.env':{NODE_ENV:"'production'"}});

module.exports = {
  mode: isDevBuild ? 'development' : 'production',
  devtool: "source-map",
  cache: false,
  watch: true,
  devServer: {
    port: 8181,
    historyApiFallback: true
  },
  entry: {
		'app': path.resolve(__dirname + '/client/index.jsx')
	},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            query: {
              modules: true
              }
          }, 
          {
            loader: "sass-loader",
            query: {
              modules: true
              }
          }
        ]
			},
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        query:{
          name:'[name].[ext]',
          outputPath:'images/'
        }
      },
      {
        test:  /\.(png|jp(e*)g|svg)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        query:{
          limit:'10000',
          name:'images/[name].[ext]',
          outputPath:'images/'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, 
      {
        test:/\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname + '/build'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve(__dirname + '/client'),
      path.resolve(__dirname + '/node_modules')
    ], 
    extensions: ['*', '.scss', '.js', '.jsx']
  },
  plugins:[ 
    ExtractHTMLWebpackPlugin,
    ExtractTextPluginStyles,
    ExtractUglifyJSPlugin,
    DefineProd
  ]
}