module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        olive: '#85837B',
        trueWhite: '#F5F6F2',
        trueGrey: '#363636'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
