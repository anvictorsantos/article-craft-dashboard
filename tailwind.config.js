/** @type {import('tailwindcss').Config} */

/*eslint no-undef: "error"*/
/*eslint-env node*/

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif']
        },
        extend: {}
    },
    plugins: []
};
