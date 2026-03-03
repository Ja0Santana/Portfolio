/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./js/**/*.js"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0dccf2",
                "background-light": "#f5f8f8",
                "background-dark": "#101f22",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
            keyframes: {
                slideUpFade: {
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'slide-up-fade': 'slideUpFade 4s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
