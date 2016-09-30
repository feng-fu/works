var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './main.js',
  output: {
    path:'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      // { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {test:/\.json$/,loader:'json'}
    ]
  },
  plugins:[
      new webpack.ProvidePlugin({ //加载jq
            $: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({ //压缩代码
        compress: {
            warnings: false
        },
        except: ['$super', '$', 'exports', 'require',/node_modules/] //排除关键字
    }),
    new webpack.optimize.CommonsChunkPlugin("commons.js", ["index", "delegate"])
    ]
};