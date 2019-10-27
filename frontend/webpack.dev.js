const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
    mode: 'development',
    entry: {
        one: './src/one.js',
        two: './src/two.js'
    },
    devtool: 'source-map',
    output: {
        // filename: 'static/[name].[hash].js', //use hash for prod build
        filename: 'static/[name].js',
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
            chunks: 'all' // adjust HtmlWebpackPlugin.chunks to include correct chunks into template
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
            RANDOM_STRING: JSON.stringify('5fa3b9'),
            TWO: '1+1',
        }),
        new CleanWebpackPlugin(), // clear output folder before build
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ // plugin for custom templates, for example thymeleaf
            template: 'src/templates/one.html',
            filename: 'one.html',
            chunks: ['one', 'vendors~one'] // when splitChunks is set, webpack will print chunk names into console
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/two.html',
            filename: 'two.html',
            chunks: ['two']
        }),
        new MergeIntoSingleFilePlugin({ // plugin to bundle old legacy libs and files into one
            // need to manually include into head with script tag
            // better option is to import into webpack entry file
            // todo minify if prod
            files: [{
                src: [
                    'src/js-includes/libs/lib-no-export3.js',
                    'src/js-includes/libs/jquery-3.4.1.js',
                ],
                dest: 'static/bundle.js'
            }]
//                              "vendor.css": [
//                                  'node_modules/toastr/build/toastr.min.css'
//                              ]

        }),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // all options are optional
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        //     ignoreOrder: false, // Enable to remove warnings about conflicting order
        // }),
    ]
};