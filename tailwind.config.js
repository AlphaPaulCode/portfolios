/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Customize your color palette, fonts, etc.
      colors: {
        exotic: '#6EE7B7', // custom exotic accent color
      },
      backgroundImage: {
        'exotic-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
}
