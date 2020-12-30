const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        //as the files can be cached by browser, so use content hash to generate new file name on its content changes
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        //to clean dist folder
        new CleanWebpackPlugin(),
        //to inject built javascript into html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    module: {
        //loaders for loading different file types
        rules: [
            {
                //babel-loader to convert js or jsx to compatible js. It should not touch node_modules folder
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ]
    },
}