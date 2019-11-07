const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');

module.exports = {
    mode: 'production',
    entry: {
        one: './src/one.js',
        two: './src/two.js'
    },
    devtool: 'nosources-source-map', // exposes file structure without filecontent
    output: {
        // filename: 'static/[name].[hash].js', //use hash for prod build
        filename: 'static/[name].[contenthash].js',
        library: '[name]',
        path: path.resolve(__dirname, '../src/main/resources/dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendors', // bundle everything from node_modules into vendors.js
             cacheGroups: {
               lodash: { // bundle lodash separately into lodash.js
                 test: /[\\/]node_modules[\\/]lodash[\\/]/,
                 name: 'lodash',  // don't forget to include chunk into HtmlWepbackPlugin list
                 chunks: 'all',
               }
             },
           }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true // todo remove in prod bundle
                        }
                    }
                    , {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true // todo remove in prod bundle
                        }
                    }],

            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'static/images/[hash]-[name].[ext]'
                    }
                }]
            }

        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            // pass environment variables here
            RANDOM_STRING: JSON.stringify('5fa3b9'),
            TWO: '1+1',
        }),
        new CleanWebpackPlugin(), // clear output folder before build
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ // plugin for custom templates, for example thymeleaf
            template: 'src/templates/one.html',
            filename: 'one.html',
            chunks: ['one', 'vendors', 'bundle_head', 'lodash'] // when splitChunks is set, webpack will print chunk names into console
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/two.html',
            filename: 'two.html',
            chunks: ['two', 'vendors', 'bundle_head', 'lodash']
        }),
        new ConcatPlugin({
            name: 'bundle_head', // don't forget to include chunk into HtmlWepbackPlugin list
            uglify: true,
            outputPath: 'static/',
//             sourceMap: true,
            fileName: '[name].[hash:8].js',
            filesToConcat: [
                './src/js-includes/libs/lib-no-export3.js',
                './src/js-includes/libs/lib-no-export4.js',
                './src/js-includes/libs/jquery-3.4.1.js'
            ],
        }),
        new HtmlWebpackInjector()
    ]
};