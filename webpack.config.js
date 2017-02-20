var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
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
                loader: "style-loader!css-loader!stylus-loader"
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
    }
};