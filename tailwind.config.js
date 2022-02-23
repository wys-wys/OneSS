module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'op': '#0360E4',
                'opv': '#1F7EFE',
                'ob': '#161A1C',
                'ow': '#F1F2F4',
            },
            boxShadow: {
                'oLx': '4px 0 4px 0 rgba(31, 126, 254, 0.40)',
                'oDx': '4px 0 4px 0 rgba(28, 86, 163, 0.40)',
                'oy': '0 4px 4px 0 rgba(31, 126, 254, 0.40)',
            }
        }
    },
    plugins: [],
}
