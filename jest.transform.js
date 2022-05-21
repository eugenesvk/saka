const babelOptions = {
  presets: [['env', { targets: { node:'14' } }], 'react'],
  plugins: [['@babel/plugin-transform-react-jsx', { pragma:'h' } ]  ]
};
module.exports = require('babel-jest').createTransformer(babelOptions);
