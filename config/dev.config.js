const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const base = require('./base.config')

base.output = {
    path: path.resolve(__dirname, "../dist"),
    filename: 'bundle.js'
}

base.mode = 'development'

base.devtool = 'source-map'

const PORT = 2019


base.devServer = {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    open: false,
    port: PORT,
    historyApiFallback: true,
    overlay: {
        warnings: true,
        errors: true
    },
    noInfo: true,
    host: '0.0.0.0',
    after: () => {
        console.info(`[ Build ] finish. Port: ${PORT}`)
    }
}

base.plugins.push(
    new HtmlWebpackPlugin({
        title: 'Template',
        filename: 'index.html',
        template: path.resolve(__dirname, './dev.template.hbs'),
        inject: false
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
)

module.exports = base
