/** @type {import('stylelint').Config} */

export default ({
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss',],
      extends: ['stylelint-config-recommended-scss',],
    },
    {
      files: ['*.vue', '**/*.vue',],
      extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue',],
    },
  ],
});
