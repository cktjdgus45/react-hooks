/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,ts,tsx,js}'],
  theme: {
    extend: {
      "gridTemplateColumns": {
        'customize-grid-col': 'repeat(5, minmax(0, 200px))'
      },
      "gridTemplateRows": {
        'customize-grid-row': 'repeat(1,minmax(0,1fr))'
      },
      "height": {
        'iframe-video-height': '32em'
      }
    },
  },
  plugins: [],
}
