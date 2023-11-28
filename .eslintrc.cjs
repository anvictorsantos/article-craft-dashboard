/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-prettier'
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'prettier/prettier': 'error',
        'vue/require-default-prop': 'off',
        'vue/attributes-order': 'error',
        'vue/no-v-html': 'error',
        'no-restricted-imports': [
            'error',
            {
                patterns: ['.*']
            }
        ]
    }
};
