module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050507",
        slateGlass: "rgba(255,255,255,0.04)",
        accent1: "#00c2ff",
        accent2: "#7c4dff"
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Poppins', 'sans-serif']
      },
      borderRadius: {
        xl: '14px'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(2,2,8,0.6)',
        'neon': '0 10px 40px rgba(0,194,255,0.08)'
      }
    }
  },
  plugins: []
}
