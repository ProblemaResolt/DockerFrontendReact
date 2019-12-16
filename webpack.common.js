const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
       path: path.resolve(__dirname + '/dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.tsx?$/,
          loader: 'babel-loader'
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        }
      ]
    }
}