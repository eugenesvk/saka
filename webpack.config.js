const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const marked = require('marked');
const path = require('path');
const { merge } = require('webpack-merge');
const { version } = require('./manifest/common.json'); // mode controls:

const renderer = new marked.Renderer();
// process.traceDeprecation = true;
// markdown convert to html

module.exports = function webpackConfig(env, argv) {
  const [platform, benchmark] = env.target.split(':');

  const config = {
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        src: path.join(__dirname, 'src'),
        msg: path.join(__dirname, 'src/msg'),
        suggestion_engine: path.join(__dirname, 'src/suggestion_engine'),
        suggestion_utils: path.join(__dirname, 'src/suggestion_utils'),
        lib: path.join(__dirname, 'src/lib'),
        scss: path.join(__dirname, 'src/scss')
      },
      modules: ['./src', './node_modules']
    },
    entry: {
      background_page: 'src/background_page/index.js',
      toggle_saka: 'src/content_script/toggle_saka.js',
      // 'extensions': './src/pages/extensions/index.js',
      // 'info': './src/pages/info/index.js',
      // 'options': './src/pages/options/index.js',
      saka: 'src/saka/index.jsx',
      'saka-options': 'src/options/saka-options.jsx'
    },
    optimization:{ splitChunks:{ cacheGroups:{
      commons: {
        test  : /[\\/]node_modules[\\/]/,
        name  : 'vendor',
        chunks: 'all'
        }
      }}},
    module: {
      rules: [
        { test:/\.(jsx|js)$/, use:[require.resolve('babel-loader')], exclude:/node_modules/ },
        { test:/\.css$/i    , sideEffects:true, use:[require.resolve('style-loader'),require.resolve('css-loader')] },
        { test:/\.s[ac]ss$/i, use:[require.resolve('style-loader'),require.resolve('css-loader'), {loader:require.resolve('sass-loader'),
          options:{ sassOptions: {
            importer(url, prev) {
              if (url.indexOf('@material') === 0) {
                const filePath = url.split('@material')[1];
                const nodeModulePath = `./node_modules/@material/${filePath}`;
                return { file: path.resolve(nodeModulePath) };
              }
              return { file: url }; } } } } ] },
        { test:/\.md$/      , use:[require.resolve('html-loader'), {loader:require.resolve('markdown-loader'),options:{renderer}}]}
      ]
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.ProvidePlugin({ browser:require.resolve('webextension-polyfill') }),
      new CopyWebpackPlugin({ patterns: [
        {                     from:'static'},
        // {context:'src/modes', from:'**/default.json', to:'default_[folder].json'},
        // {context:'src/modes', from:'**/config.json' , to:'config_[folder].json'},
        ] }),
      new GenerateJsonPlugin(
        'manifest.json',
        merge(
          require('./manifest/common.json'),
          require(`./manifest/${platform}.json`),
          { version }
        ),
        null,
        2
      )
    ]
  };

  // 1. SAKA_DEBUG: boolean(true | false)
  //   * true for development builds
  //   * false for production build
  //   If you want something to run only in testing/development, use
  //     if (SAKA_DEBUG) { console.log(variable); }.
  //   All code within will be removed at build time in production builds.
  // platform controls:
  // 1. SAKA_PLATFORM: string('chrome' | 'firefox' | 'edge')
  //   Use this to provide platform specific features, e.g. use shadow DOM
  //   on chrome but css selectors on firefox and edge for link hint styling

  if (argv.mode === 'production') {
    config.plugins = config.plugins.concat([
      new TerserPlugin(),
      new webpack.DefinePlugin({
        SAKA_DEBUG: JSON.stringify(false),
        SAKA_VERSION: JSON.stringify(version),
        SAKA_PLATFORM: JSON.stringify(platform),
        SAKA_BENCHMARK: JSON.stringify(true)
      })
    ]);
  } else {
    config.devtool = 'source-map';
    config.plugins = config.plugins.concat([
      new webpack.DefinePlugin({
        SAKA_DEBUG: JSON.stringify(true),
        SAKA_VERSION: JSON.stringify(`${version} dev`),
        SAKA_PLATFORM: JSON.stringify(platform),
        SAKA_BENCHMARK: JSON.stringify(benchmark === 'benchmark')
      })
    ]);
  }
  return config;
};
