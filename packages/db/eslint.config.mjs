import tszhong0411 from '@tszhong0411/eslint-config'

export default tszhong0411(
  {
    project: './tsconfig.json',
    tsconfigRootDir: import.meta.dirname,
    turbo: true
  },
  {
    ignores: ['src/migrations/**']
  }
)
