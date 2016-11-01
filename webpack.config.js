var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: {
        "vendor": path.resolve(__dirname, 'src/main/webapp/ts/vendor.ts'),
        "app": path.resolve(__dirname, 'src/main/webapp/ts/app.ts')
    },
    output: {
        path: path.resolve(__dirname, 'src/main/webapp/build'),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    }
};
