var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var plugins = PRODUCTION
    ?   [
            new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
            new ExtractTextPlugin('style.css'),
            new HTMLWebpackPlugin({
                template: 'index-template.html'
            })
        ]
    :   [ ];

plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)
    })
);

const cssLoader = PRODUCTION
    ?	ExtractTextPlugin.extract("style-loader", "css-loader!postcss!stylus-loader")
    : 	"style-loader!css-loader!stylus-loader";

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    plugins: plugins,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'static/'
    },
    devServer: {
        proxy: [{
            path: '/api/',
            target: PRODUCTION ? '' :'http://localhost:3001'
        }],
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.styl$/,
                loader: cssLoader
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 250000
                },
            }
        ]
    },
    stylus: {
        define: {
            $grid_columns: 24,
            $grid_gutter_width: 12,
            $screen_xs: 320,
            $screen_sm: 640,
            $screen_md: 960,
            $screen_lg: 1280
        }
    },
    postcss: [autoprefixer({ browsers: ['last 5 versions'] })],
};
