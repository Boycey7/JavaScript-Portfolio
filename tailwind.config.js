/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#2d2e32',
        'custom-teal': '#0ccbb8'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif']
      },
      utilities: {
        '.scroll-smooth': {
          'scroll-behavior': 'smooth'
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
