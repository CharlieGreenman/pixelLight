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
            {test: /\.scss$/,loaders: ["style", "css", "autoprefixer-loader", "sass"]},
            {test: /\.jade/, loader: "jade" },
            // { test: /\.js$/, loader: 'jsx-loader!transform/cacheable?envify' },
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
        postLoaders: [
          { loader: "transform?brfs" }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx'],
            alias: {
              'react-canvas': 'lib/ReactCanvas.js'
            }
        }
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
