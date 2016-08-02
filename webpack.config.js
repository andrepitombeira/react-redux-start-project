module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
};
