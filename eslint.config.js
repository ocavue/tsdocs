import { basic, markdown } from '@ocavue/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  ...basic(),
  ...markdown(),
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'assert'] }],
    },
  },
  {
    ignores: ['examples/example-typedoc/**/*'],
  },
]

export default configs
