/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'clicksUI-gray-800': 'rgb(30, 30, 30)',
      },
      textColor: {
        'clicksUI-gold': 'rgb(218, 165, 32)',
      },
      maxWidth: {
        'clicksUI-screen': '1344px',
        'clicksUI-x': '1040px',
        'clicksUI-msg': '634px',
      },
      colors: {
        'clicksUI-gold-900': 'rgb(218, 165, 32)',
        'clicksUI-gold-700': 'rgb(240, 186, 51)',
        'clicksUI-green-900': 'rgb(47, 79, 79)',
      },
      objectPosition: {
        'clicksUI-left': '-100px center',
      },
    },
  },
  plugins: [],
}
