var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'vendor': helpers.root('src/main/webapp/ts/app/vendor.ts'),
        'app': helpers.root('src/main/webapp/ts/app/app.ts')
    },

    resolve: {
        extensions: ['', '.ts', '.js', 'html', 'css', 'less', 'styl'] //Imports possible extensions
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', //Typescript to ES5
                    'angular2-template-loader'] //Load angular component's template and styles
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src/main/webapp/ts/app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src/main/webapp/ts/app'),
                loader: 'raw'
            },
            {
                test: /\.styl/,
                include: helpers.root('src/main/webapp/ts/app'),
                loader: 'raw!stylus'
            },
            {
                test: /\.less$/,
                include: helpers.root('src/main/webapp/ts/app'),
                loader: 'raw!less-loader'
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({ //Keep the vendor code out of the app
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({ //Inject scripts and links into index.html
            template: helpers.root('src/main/webapp/index.html')
        })
    ]
};