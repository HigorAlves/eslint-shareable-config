module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react'
  ],
  plugins: [
    'react-hooks',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'react',
    'prettier'
  ],
  rules: {
    eqeqeq: 'off',
    complexity: [
      'error',
      {
        max: 8
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'space-before-function-paren': 'off',
    'no-use-before-define': 'off',
    'multiline-ternary': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}
