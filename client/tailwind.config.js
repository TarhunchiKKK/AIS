/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    DEFAULT: "rgb(59 130 246)",
                },
                gray: {
                    DEFAULT: "rgb(229 231 235)",
                },
            },
        },
    },
    plugins: [],
};
