module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "night", "valentine", "aqua"],
    },
}
