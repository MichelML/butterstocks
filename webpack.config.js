module.exports = {
  entry: './src/ts/index.ts',
  output: {
    filename: './dist/bundle.js',
    publicPath: '/dist/'

  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
    { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      },{
        loader: "autoprefixer-loader"
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  }
}
