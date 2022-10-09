/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    textColor: {
      'graphite': '#52514f',
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'lightBlue': '#66b2ff',
      'default': '#969696',
      'linkedin': '#2867B2',
      'upwork': '#73bb44',
      'graphql': '#e535ab',
      'laravel' : '#ED544E',
      'vuejs': '#41B883',
      'reactjs': '#04d8f9',
      'violetblue': '#2F1AA1',
      'lightgreen': '#2FCD2C',
      'my': '#00758F',
      'sql': '#F29111',
      'html':'#ED553B',
      'css': '#20639B',
      'javascript': '#F6D55C',
      'jQuery': '#173F5F',
      'violetblue': '#312DFF',
      'lightred': '#A13E1A',
      'pink': '#C44ABE',
      'white': '#FFFFFF',
    },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'graphite': '#52514f',
     }),
    screen: {
      xxs: { min: '320px', max: '574px'},
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      xxl: { min: '1359px' } // Desktop widescreen.
      // 'xs': '320px',
      //  // => @media (min-width: 320px) { ... }

      // 'sm': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width
    },
    extend: {
      colors: {
        graphite: '#52514f',
      }
    },
  },
  plugins: [],
}
