const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/app/static/js/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dst/app/static/js'),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/app/templates/index.tpl.html',
          inject: 'body',
          filename: '../../templates/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint",
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel",
            },
            {
                test: /\.json?/,
                loader: "json",
            },
        ]
    }
};