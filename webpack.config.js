module.exports = {
  entry: './src/typescript/index.ts',
  output: {
    filename: './dist/bundle.js'

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
