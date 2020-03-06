const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './assets/js/index.js',
        './assets/css/main.scss'
    ],
    output: {
        filename: './bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'assets/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader!sass-loader' // loaders to preprocess CSS
                )
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|webp)$/i,
                loaders: [
                    'file-loader',
                    'webp-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('[name].css'),
    ],
};