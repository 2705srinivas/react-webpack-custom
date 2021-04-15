const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
var path = require("path")

module.exports = {
    entry: "./src/index.tsx",
    mode: 'production',
    output: {
        filename : "main.[contenthash].js", 
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '...']
  },
    module:{
        rules:[{
            test: /\.(ts|tsx)$/,
            use: ['ts-loader']
        },{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },{
            test: /\.css$/,
            use: [MiniCSSExtractPlugin.loader, 'css-loader']
          }]
    },
    plugins:[new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./public/index.html"
    }), new MiniCSSExtractPlugin()],
}