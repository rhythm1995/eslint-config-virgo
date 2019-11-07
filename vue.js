'use strict';

module.exports = {
  extends: [
    './index',
    './lib/rules/browser',
    './lib/rules/import',
    './lib/rules/vue'
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
};
