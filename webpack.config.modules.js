var path = require('path')
var webpack = require('webpack')
// 这里的入口文件,不仅是项目中 通过 npm run dev 的进入文件  
// 同时也是 npm run build后的入口文件
module.exports = {
  entry: './index.js', // 项目的入口文件 
  output: {
    path: path.resolve(__dirname, './dist'),  // 打包后输出文件的所在目录
    // publicPath: '/dist/', // 打包输出的文件路径
    filename: 'new-hope-ui.js',  //打包后的 文件名称，这个文件名称与项目名称相对应
    library: 'new-hope-ui',  // 指定 使用 import 或者 reqire 时的模块名，这里为 import xx from 'star-ui-vue' 或者 require('star-ui-vue')
    libraryTarget: 'umd', // 可以指定生成不同的 umd 的代码， 可以只是 commonjs 标准的，也可以是 amd 标准的， 也可以是只能通过 script 标签引入的
    umdNamedDefine: true // 会对 umd 的构建过程中的 amd 模块进行命名，  否则就使用 匿名的 define
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}