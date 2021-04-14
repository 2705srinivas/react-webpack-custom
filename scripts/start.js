const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('../webpack.config')

const webpackCompiler = webpack(config);

const HMRServer = new webpackDevServer(webpackCompiler)

HMRServer.listen(5000, 'localhost', function() {
    console.log('dev server listening on port 5000')
})