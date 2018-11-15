// Webpack config dosyası bundle.js oluşturmakta kullanıyor.
// tüm JS script dosyalarını toplayarak tek bir dosya haline getiriyor.

const path = require('path');
const ExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production' // true is env is production
    const CSSExtract = new ExtractTextPlugin({
        filename: 'styles.css'
      });

    return {
        mode : 'production', // change to production before flight
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
                    ExtractTextPlugin.loader,
                    {
                        loader : 'css-loader',
                        options : {
                            sourceMap : true
                        }
                    },
                    {        
                        loader : 'sass-loader',
                        options : {
                            sourceMap : true
                        }
                    }
                ],
            }]
        },
        plugins : [
            CSSExtract
        ],
        devtool : isProduction ? 'source-map' : 'cheap-module-eval-source-map', // change to production setting before flight
        devServer : {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback: true // 404 API always call same index.html for 404
        }   
    }
}
