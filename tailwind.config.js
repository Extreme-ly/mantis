module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      width: {
        '160': '70rem',
      },
      colors: {
        'mantis': "#FFC288",
        'mantis-darker': "#E5890A",
        'white-darker': "#EEEEEE",
        'gray': '#68798094',
        'black': '#212121',
        'aqua-blue': '#96BAFF',
        'aqua-purple': '#7C83FD',
        'aqua-lightblue': '#7DEDFF',
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
