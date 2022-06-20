/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  content: [],
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  theme: {
    extend: {}
  },
  plugins: []
}
