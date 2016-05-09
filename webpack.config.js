var path = require("path");
var open = require("open");
//for legac systems
require('es6-promise').polyfill();

//a little bit of glitch before page opens,
//works well otherwise
open("http://localhost:8080/");

module.exports = {
    entry: [
        //'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/js/main.js')
    ],
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: 'js',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: "#eval-source-map",
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader",  exclude: /node_modules/ }
        ],
        //https://github.com/Flipboard/react-canvas/issues/102
        loaders: [
            {test: /\.scss$/,loaders: [
              "style",
               "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
               "autoprefixer-loader",
               "sass"]},
            {test: /\.jade/, loader: "jade" },
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /(\.js)$/,
              loader: 'cssx-loader',
              exclude: /node_modules/
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
