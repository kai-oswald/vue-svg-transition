const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../stories')],
    enforce: 'pre',
  });
  return config;
};