module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:cypress/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: { semi: ['error', 'always'] },

  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
}
