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
]

export default configs
