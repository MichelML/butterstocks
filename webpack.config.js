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
      { test: /\.tsx?$/, loader: 'ts-loader'  }
    ]
  }
}
