const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge.merge(commonConfig, {
    //mode is development
    mode: 'development',
    //to have source map inside javascript files
    devtool: 'inline-source-map',
    devServer: {
        //so that dist folder is served on development server
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                //sass loader to convert to css then css loader to load css file and style loader to append that css to style tag
                test: /\.(scss|css)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
        ]
    }
})