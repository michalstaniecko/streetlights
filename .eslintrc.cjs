module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic', '@stylistic/js', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/jsx-indent': [2, 2],
    'indent': [
      'error',
      2,
    ],
    'linebreak-style':                        [ 'error', 'unix' ],
    'quotes':                                 [ 'error', 'single' ],
    'semi':                                   [ 'error', 'always' ],
    '@stylistic/comma-spacing':               [ 'error' ],
    '@stylistic/no-multiple-empty-lines':     [ 'error', { 'max': 1, 'maxEOF': 0 } ],
    '@stylistic/array-bracket-newline':       [ 'error' ],
    '@stylistic/comma-dangle':                [ 'error', 'always-multiline' ],
    '@stylistic/object-curly-spacing':        [ 'error', 'always' ],
    '@stylistic/object-curly-newline':        [ 'error', { 'multiline': true } ],
    '@stylistic/no-trailing-spaces':          [ 'error' ],
    '@stylistic/space-before-function-paren': [ 'error', 'never' ],
    '@stylistic/block-spacing':               [ 'error', 'always' ],
    '@stylistic/no-multi-spaces':             [ 'error' ],
    '@stylistic/js/key-spacing':                 [ 'error', { 'align': 'value' } ],
    '@stylistic/array-bracket-spacing':       [ 'error', 'always' ],
    'brace-style':                            [ 'error' ],
    '@stylistic/space-infix-ops':             [ 'error' ],
    '@stylistic/semi-spacing':                [ 'error' ],
    '@stylistic/space-in-parens':             [ 'error', 'always' ],
    '@stylistic/function-paren-newline':      [ 'error', 'multiline-arguments' ],
    '@stylistic/jsx-child-element-spacing':      [ 'error' ],
    'camelcase':                              [
      'error', {
        'ignoreDestructuring': true,
        'ignoreImports':       true,
      },
    ],
    'func-style':                       [ 'error', 'declaration', { 'allowArrowFunctions': true } ],
    '@stylistic/array-element-newline': [
      'error', {
        'ArrayExpression': 'consistent',
        'ArrayPattern':    { 'minItems': 3 },
      },
    ],
    '@stylistic/keyword-spacing': [
      'error', {
        'before': true,
        'after':  true,
      },
    ],
    "@typescript-eslint/typedef": "error"
  },
}
