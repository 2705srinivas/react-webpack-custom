const HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")

module.exports = {
    entry: "./src/index.tsx",
    mode: 'production',
    output: {
        filename : "output.js", 
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '...']
  },
    module:{
        rules:[{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
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
          }]
    },
    plugins:[new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./public/index.html"
    })],
    devServer:{
      hot: true
    }
}