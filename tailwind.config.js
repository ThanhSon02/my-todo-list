/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                btn: '#0A0416',
                highLight: '#FF636C',
                today: '#060011',
                notSameMonth: '#7E7E7E',
            },
            backgroundImage: {
                startBg: 'linear-gradient(15deg,#2A2C2E,#2B125A,#000)',
            },
            backgroundColor: {
                switchBtnBg: '#3C1F7B',
                switchBtn: '#272430',
                today: '#7E64FF',
            },
            width: {
                74.5: '298px',
                33.25: '133px',
            },
            borderRadius: {
                circle: '50%',
            },
        },
    },
    plugins: [],
};
