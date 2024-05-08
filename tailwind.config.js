/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poetsen: ['Poetsen-One'],
                romanaBold: ['Romana-Bold'],
                romanaLight: ['Romana-Light'],
            },
        },
    },
    plugins: [],
}
