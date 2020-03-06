const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './assets/js/index.js',
    ],
    output: {
        filename: './bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'assets/js'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: 'env'
                }
            }
        },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
};