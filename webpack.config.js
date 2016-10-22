module.exports = {
  entry: './entry.js',
  output: {
    path: './src',
    filename: 'index.js' 
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
