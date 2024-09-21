// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierConfig from "eslint-plugin-prettier/recommended";

export default withNuxt(
  // Your custom configs here
  {
    files: ["**/*.vue"],
    rules: {
      // pagesにおいて"/"を許可するために無視する
      "vue/multi-word-component-names": "off",
    },
  },
  prettierConfig,
);
