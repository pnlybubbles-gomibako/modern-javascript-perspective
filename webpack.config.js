module.exports = {
  entry: './index.ts',
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
  }
}
