/* eslint-disable no-undef */
const Path = require('path');

module.exports = (env) => ({
  mode: env && ['stg', 'prd'].includes(env.NODE_ENV) ? 'production' : 'development',
  target: 'electron-main',
  entry: './electron/main.js',
  output: {
    path: Path.join(__dirname, './dist'),
    filename: 'main.bundle.js'
  },
  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false,
  }
});
