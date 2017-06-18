const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/app/static/js/main.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dst/app/static'),
        filename: "js/[name].js",
        publicPath: "http://localhost:5000/static/"
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
                test: /\.jsx?$/,
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
                test: /\.jsx?$/,
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
            {
                test: /\.(png|jpe?g)$/,
                loader: 'file-loader',
                query: {
                    outputPath: "img/",
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader',
                query: {
                    outputPath: "fonts/",
                    name: "[name].[ext]"
                }
            }
        ]
    }
};