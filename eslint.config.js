import neoStandard from 'neostandard'

export default [
  ...neoStandard({
    ts: true
  }),
  {
    rules: {
      '@stylistic/comma-dangle': ['error', 'never']
    }
  }
]
