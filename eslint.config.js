import { defineESLintConfig } from '@ocavue/eslint-config'

export default defineESLintConfig({}, [
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'assert'] }],
    },
  },
  {
    ignores: ['examples/example-typedoc/**/*'],
  },
  {
    rules: {
      'package-json/require-type': 'off',
      'package-json/require-description': 'off',
    },
    files: ['examples/**/*'],
  },
])
