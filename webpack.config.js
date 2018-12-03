// Webpack config dosyası bundle.js oluşturmakta kullanıyor.
// tüm JS script dosyalarını toplayarak tek bir dosya haline getiriyor.

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('mini-css-extract-plugin');

// Gets NODE_ENV value from cross-env for test run.
// Set default to development.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// LOADs Process.env. parameters from the file.
if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) => {
    const isProduction = env === 'production' // true is env is production
    const CSSExtract = new ExtractTextPlugin({
        filename: 'styles.css'
      });

    return {
        mode : 'production', // change to production before flight
        entry: './src/app.js',
        output : {
            path : path.join(__dirname,'public', 'dist'),
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
            CSSExtract,
            new webpack.DefinePlugin({ // This plugin used to pass parameters to client side.
                'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL' : JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        devtool : isProduction ? 'source-map' : 'cheap-module-eval-source-map', // change to production setting before flight
        devServer : {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback: true,// 404 API always call same index.html for 404
            publicPath : '/dist/'
        }   
    }
}
