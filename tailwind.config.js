/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'blue-gray': '#DBE2EF',
        'alabaster': '#B4B4B8',
        'creme': '#F2EFE5',
        'ocean': '#A8D8EA',
        'dark-blue': '#364F6B',
        'onyx': '#333A3Bff',
        'mikado-yellow': '#FFC600ff',
        'light-sky-blue': '#C3DEE6',
        'light-purple': '#8D8DE6',
        'ap_charcoal-black': '#1D2123',
        'ap_deep-orange': '#E55B14',
        'ap_gunmetal-grey': '#53585B',
        'ap_misty-grey': '#6D6E71',
        'ap_silvery-white': '#D5D6D8',
      }
    },
  },
  plugins: [],
}
