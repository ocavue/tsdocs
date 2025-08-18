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
])
