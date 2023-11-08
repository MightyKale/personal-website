/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          10: '#FAF3F0',
          30: '#F1DED1',
          50: '#E9B384'
        },
        cream: {
          10: '#F4F1E8',
          20:'#FCF5E7',
          30: '#F4F2DE'
        },
        teal: {
          50: '#A1CCD1',
        },
        grey: {
          50: '#383E48',
        },
      },
      screens: {
        'xs': '400px',
        'ml': '1200px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    },
  },
      
  plugins: [],
};
