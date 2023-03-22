/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                btn: '#0A0416',
            },
            backgroundImage: {
                startBg: 'linear-gradient(15deg,#2A2C2E,#2B125A,#000)',
            },
        },
    },
    plugins: [],
};
