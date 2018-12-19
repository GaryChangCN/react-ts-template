const webpack = require('webpack')
const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')



module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    // loader: 'ts-loader'
                    loader: 'awesome-typescript-loader'
                }
            },{
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(eot|svg|ttf|woff|woff2|gif)$/,
                use: ['file-loader?name=dist/assets/[name][sha512:hash:base64:7].[ext]&publicPath=../']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        modules: ['node_modules']
    },
    plugins: [
        new CheckerPlugin(),
    ]
}
