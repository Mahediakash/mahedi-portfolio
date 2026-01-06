/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#002747",
                accent: "#5CFF00",
            },
            container: {
                center: true,
                padding: "2rem",
            },
        },
    },
    plugins: [],
};
