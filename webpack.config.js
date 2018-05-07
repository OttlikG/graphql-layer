const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

const isDev = (process.env.NODE_ENV === 'development');

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './src/server'
  ],
  mode: isDev ? 'development' : 'production',
  watch: true,
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "node": "current"
                  }
                }
              ]
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread'
            ],
            compact: false,
            // sourceMaps: 'both'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ]
  },
  plugins: [
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: [(isDev ? '--inspect' : '')]
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'server.js'
  }
}