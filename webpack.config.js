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
    rules: [
    { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    {
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
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
}
