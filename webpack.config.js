const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/app/static/js/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dst/app/static'),
        filename: "js/[name].js",
        publicPath: "/dst/app"
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/app/templates/index.tpl.html',
          inject: 'body',
          filename: '../templates/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                        configFile: '.eslintrc',
                        failOnWarning: false,
                        failOnError: false
                },
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader?sourceMap",
                    "resolve-url-loader",
                    "sass-loader?sourceMap"
                ]
            },
        ]
    }
};