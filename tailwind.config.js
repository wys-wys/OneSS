module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'oLp': '#0360E4',
                'oDp': '#0B4494',
                'oLpv': '#1F7EFE',
                'oDpv': '#1C56A3',
                'ob': '#161A1C',
                'ow': '#F1F2F4',
            },
            boxShadow: {
                'ox': '4px 0 4px 0 rgba(31, 126, 254, 0.40)',
                'oy': '0 4px 4px 0 rgba(31, 126, 254, 0.40)',
            }
        }
    },
    plugins: [],
}
