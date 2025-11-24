/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                azul: '#00aaff',
                negro: '#050505',
                gris: '#121212',
                blanco: '#ffffff',
            }
        },
    },
    plugins: [],
}
