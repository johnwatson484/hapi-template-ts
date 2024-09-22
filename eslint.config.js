import neoStandard, { plugins } from 'neostandard'

export default [
  ...neoStandard({
    globals: ['describe', 'beforeEach', 'expect', 'test', 'afterEach', 'jest', 'beforeAll', 'afterAll'],
    ts: true
  }),
  plugins['typescript-eslint'].configs.recommended
]
