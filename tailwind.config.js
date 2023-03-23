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
            backgroundColor: {
                switchBtnBg: '#3C1F7B',
                switchBtn: '#272430',
            },
            width: {
                74.5: '298px',
                33.25: '133px',
            },
        },
    },
    plugins: [],
};
