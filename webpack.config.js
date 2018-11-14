// Webpack config dosyası bundle.js oluşturmakta kullanıyor.
// tüm JS script dosyalarını toplayarak tek bir dosya haline getiriyor.

const path = require('path');

module.exports = {
    mode : 'development', // change to production before flight
    entry: './src/app.js',
    output : {
        path : path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module : {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
        ]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback: true // 404 API always call same index.html for 404
    }
};