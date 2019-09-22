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
//  devtool: 'source-map',
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

            }

        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/templates/one.html',
            filename: 'one.html',
            inject: 'body',
            chunks: ['one']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/two.html',
            filename: 'two.html',
            inject: 'body',
            chunks: ['two']
        }),
        new MergeIntoSingleFilePlugin({
            files: [{
                src: [
                    'src/js-includes/1.js',
                    'src/js-includes/2.js',
                    'src/js-includes/3.js',
                    'src/js-includes/4.js',
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