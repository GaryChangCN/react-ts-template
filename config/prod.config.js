const webpack = require('webpack')
const path = require('path')
const base = require('./base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')



base.output = {
    path: path.resolve(__dirname, "../build"),
    filename: '[name].[hash:8].js',
}

base.mode = 'production'

base.optimization = {
    minimizer: [
        new TerserPlugin({
            parallel: true,
        })
    ],
    splitChunks: {
        cacheGroups: {
            vendors: {
                test: /\/node_modules\//,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
}


base.plugins.push(
    new HtmlWebpackPlugin({
        title: 'Prod',
        filename: 'index.html',
        template: path.resolve(__dirname, './prod.template.hbs'),
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
)

module.exports = base

