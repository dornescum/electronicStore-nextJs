module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dosis': ['"Dosis"', 'sans-serif']
      },
      keyframes: {
        wiggle: {
        '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
         ping: {
           '75%, 100%': {  transform: 'scale(2)',opacity: 0}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        ping: 'ping 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
