const path = require('path');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    { test: /\.(s?)css$/, 
              use:[{
                loader: "style-loader"
                 },
                {
                 loader: "css-loader"   
                },
                {
                 loader: "sass-loader"   
                }
              ]
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port:2000
  }
};
