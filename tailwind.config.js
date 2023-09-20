/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        header: '#16181C'
      },
      colors: {
        'purple-sec': '#3F2CAA',
        'aqua-sec': '#01B5AC',
        'black-sec': '#19181E',
        'grey-sec': '#23252C',
        'red-btn': '#FF5300',
        'card': '#2E3038'
      },
      gridTemplateColumns: {
        'footer': '1fr 2fr',
        'footer-lg': '1fr 3fr 1fr'
      },
      gridTemplateRows: {
        'footer': '1fr 1fr'
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}

