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
        'black-sec': '#19181E'
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

