const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
  mode: 'development',
  entry: {one: './src/one.js'},
//  devtool: 'source-map',
  output: {
    filename: 'static/[name].[hash].js',
    library: 'wan',
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
            }
        ],
      },
      plugins: [
          new CleanWebpackPlugin(),
          new VueLoaderPlugin(),
          new HtmlWebpackPlugin({
                template: 'src/templates/one.html',
                // todo should accept [name].html
                filename: 'one.html',
                inject: 'body'
              }),
              new MergeIntoSingleFilePlugin({
                          files: [{
                              src: [
                                      'src/js-files/1.js',
                                      'src/js-files/2.js',
                                      'src/js-files/3.js',
                                      'src/js-files/4.js',
                                  ],
                               dest: 'static/bundle.js'
                                  }]
//                              "vendor.css": [
//                                  'node_modules/toastr/build/toastr.min.css'
//                              ]

                      }),
        ]
};