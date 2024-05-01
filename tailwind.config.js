/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        'bg-light':'#e7e7e2',
        'bg-dark-1':'#222222',
        'bg-dark-2':'#0E0E0E',
        'bg-dark-3':'#000000',
        'clr-light':'#e7e7e2',
        'clr-dark':'#222222',
        // Others
        'nav-link-hover':'#8e8a86',
      },
    },
  },
  plugins: [],
}

