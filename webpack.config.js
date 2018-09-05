const path = require('path');
const webpack = require('webpack');
module.exports = {
    //entry: path.resolve(__dirname, './main.js'),
    entry: [
        "react-hot-loader/patch",
        path.resolve(__dirname, './main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        alias: {
            Component: path.resolve(__dirname, 'src/components/'),
            Router: path.resolve(__dirname, 'src/router/'),
            Actions: path.join(__dirname, 'src/redux/actions'),
            Reducers: path.join(__dirname, 'src/redux/reducers'),
            Redux: path.join(__dirname, 'src/redux')
        }
    },
    // webpack-dev-server 报错 解决方案 将 webpack-cli 和 webpack-dev-server版本降低到@2
    devServer: {
        contentBase: path.join(__dirname, "./build"),
        historyApiFallback: true,
        hot: true,
        // host: '0.0.0.0', //使手机可以通过IP访问页面
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "source-map",
};
