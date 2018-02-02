var webpack = require('webpack')

module.exports = {
    entry: {
    index: ['./app/main.js'],
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: __dirname + '/www/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,  //不包括这个文件夹
          loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {
          // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
          // 如下配置，将小于8192byte的图片转成base64码
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
      },
    ]
  },
  babel: {  // 引入antd  其中需要的npm是  "babel-plugin-import": "^1.6.2","babel-plugin-transform-runtime": "^6.15.0","style-loader": "^0.12.3","css-loader": "^0.14.5"
      presets: ['es2015', 'stage-0', 'react'],
      plugins: ['transform-runtime', ['import', {
          libraryName: 'antd',
          style: 'css'
      }]]
  },
  plugins:[
    new webpack.ProvidePlugin({    //在react组件中使用jquery
      $:"jquery",
      jQuery:'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}