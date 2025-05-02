module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-tailwindcss'],
  plugins: ['stylelint-scss'],
  rules: {
    // Пример: разрешаем неизвестные at-правила только для scss
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['apply', 'screen', 'variants', 'responsive'],
      },
    ],
  },
};
