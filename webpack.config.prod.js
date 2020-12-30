const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge.merge(commonConfig, {
    //mode is production
    mode: 'production',
    //to have source map as separate files for minified code
    devtool: 'source-map',
    module: {
        rules: [
            {
                //sass loader to convert to css then css loader to load css file and mini css extract loader to link the css file in html                
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        //mini css to create a css file with the following convention of filename
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
            //minify css files
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    },
                },
            }),
            new TerserPlugin({
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true
            }),
        ],
    },
})