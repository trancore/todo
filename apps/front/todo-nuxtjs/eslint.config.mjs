// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: [
      '**/*.vue',
    ],
    rules: {
      // pagesにおいて"/"を許可うすために無視する
      'vue/multi-word-component-names': 'off',
    },
  },
)
