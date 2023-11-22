/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: ['simple-import-sort', 'import'],
    rules: {
        'prettier/prettier': 'error',
        'vue/require-default-prop': 'off',
        'vue/attributes-order': 'error',
        'vue/no-v-html': 'error',
        'simple-import-sort/imports': 'error'
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.vue', '.json', '.js']
            }
        }
    }
};
