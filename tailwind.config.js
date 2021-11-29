module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mantis': "#FFC288",
        'mantis-darker': "#FEA82F",
        'white-darker': "#EEEEEE",
      },
      keyframes: {
        fade: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        fade: 'fade 3s',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
