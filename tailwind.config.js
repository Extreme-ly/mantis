module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  important: false,
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
        'gray-line': '#222831',
        'black': '#212121',
        'black-smooth': '#222831',
        'aqua-blue': '#96BAFF',
        'aqua-purple': '#7C83FD',
        'aqua-lightblue': '#7DEDFF',
        'lime-matte': '#99A789',
        'lime-light': '#D3E4CD',
        'orange-light': '#FED2AA',
        'orange-matte': '#FF8F86',
        'skin': '#F3F0D7',
        'menu-black': '#1e2029',
        'yellow': '#FFD369',
        'orange': '#FEA82F',
        'red': '#F05454',
        'red-high': '#E94560', 

        'dark-blue': '#064663',
        
      },
      keyframes: {
        'fade': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'like': {
          '0%': { opacity:'0', transform: 'scale(0)' },
          '15%': { opacity:'.9', transform: 'scale(1.2)' },
          '30%': { transform: 'scale(.95)' },
          '45%': {},
          '80%': { opacity:.9, transform: 'scale(1)' },
        },
        'fade-out': {
          '0%': { opacity: '1'},
          '99%': { opacity: '0.01'},
          '100%': { opacity: '0'}
        }
      },
      animation: {
        'fade': 'fade 3s',
        'like': 'like 1s ease-in-out',
        'fade-out': 'fade-out 1s'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
