const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              require('babel-plugin-transform-runtime'),
              require('babel-plugin-transform-es2015-arrow-functions'),
              require('babel-plugin-transform-object-rest-spread'),
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-react-jsx')
            ]
          },
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    'bignumber.js': 'commonjs bignumber.js',
    'react-flexible-switch': 'commonjs react-flexible-switch',
    'recharts': 'commonjs recharts',
    'web3': 'commonjs web3',
    'web3-utils': 'commonjs web3-utils',
    'react-dom': 'commonjs react-dom',
    'prop-types': 'commonjs prop-types',
    'eth-price': 'commonjs eth-price',

  }
};
