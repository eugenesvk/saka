const babelOptions = {
  presets: [['@babel/preset-env', {targets:{node:'14.19'}}], '@babel/preset-react'],
  plugins: [['@babel/plugin-transform-react-jsx', {pragma:'h'}]]
};
module.exports = require('babel-jest').default.createTransformer(babelOptions);
