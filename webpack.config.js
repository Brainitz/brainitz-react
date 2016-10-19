var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Navbar: 'app/components/Navbar.jsx',
      Edit: 'app/components/Edit.jsx',
      Admin: 'app/components/Admin.jsx',
      VideoPlayer: 'app/components/VideoPlayer.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  output: {
      publicPath: '/react-html5video/dist/',
      path: path.join(__dirname, './dist'),
      filename: './app/app.js',
      chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
