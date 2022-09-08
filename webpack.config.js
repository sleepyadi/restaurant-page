const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js') 
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },

    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            filename: 'index.html',
            template: './src/template.html',
        })
    ],
}