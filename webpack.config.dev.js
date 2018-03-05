const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var path = require('path');

module.exports = {
  entry: {
    demo: ['babel-polyfill', './demo/App.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // publicPath: '/demo'
    // libraryTarget: 'commonjs2'
  },
  devServer: {
    // contentBase: './dist',
    port: 9000
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        // include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  // externals: {
  //   'react': 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  //   'bignumber.js': 'commonjs bignumber.js',
  //   'react-flexible-switch': 'commonjs react-flexible-switch',
  //   'recharts': 'commonjs recharts',
  //   'web3': 'commonjs web3',
  //   'web3-utils': 'commonjs web3-utils',
  //   'react-dom': 'commonjs react-dom',
  // }
};
