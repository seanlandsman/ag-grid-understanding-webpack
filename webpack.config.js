const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=icons/[module]/[name].[ext]"
// i. e. file?name=[path][name].[ext]&context=/the/root/path
// This copies the file /the/root/path/dir/file.png to /output-directory/dir/file.png.

                // loaders: [

                //     'url-loader?limit=5000',
                //     'image-webpack-loader'
                // ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
         new webpack.ProvidePlugin({
      '$': 'jquery',
      'jquery': 'jquery',
      'jQuery': 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery' // jQuery pluginy no ... ¯\_(ツ)_/¯
    }),
    ]
};
