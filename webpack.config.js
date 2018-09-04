const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './main.js'),
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
    // webpack-dev-server 报错 解决方案 将 webpack-cli 和 webpack-dev-server版本降低到@2
    devServer: {
        contentBase: path.join(__dirname, "./build"),
        compress: true,
        port: 9000
    }
};
