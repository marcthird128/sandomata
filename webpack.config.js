// Webpack config

const path = require('path');

module.exports = [
  {
    mode: 'production',
    entry: './src/client/main.js',
    output: {
      filename: 'client.min.js',
      path: path.resolve(__dirname, 'build'),
    },
    target: 'web',
  },
  {
    mode: 'production',
    entry: './src/server/main.js',
    output: {
      filename: 'server.min.js',
      path: path.resolve(__dirname, 'build'),
    },
    target: 'node',
  },
];
