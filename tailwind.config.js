/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poetsen: ['Poetsen-One'],
                romanaBold: ['Romana-Bold'],
                romanaLight: ['Romana-Light'],

                crooker: ['Crooker'],
                druzhok: ['DRUZHOK'],
                waffleSlab: ['Waffle Slab'],
                waffleSoft: ['Waffle Soft'],
                zametkaParletter: ['Zametka Parletter'],
            },
        },
    },
    plugins: [],
}
