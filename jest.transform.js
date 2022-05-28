const babelOptions = {
  presets: [['@babel/preset-env', {targets:{node:'16.15'}}], '@babel/preset-react'],
  plugins: [['@babel/plugin-transform-react-jsx', {pragma:'h'}],
    ["@babel/plugin-proposal-object-rest-spread"],
    ["@babel/plugin-proposal-class-properties"]]
};
module.exports = require('babel-jest').default.createTransformer(babelOptions);
