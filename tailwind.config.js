/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./common/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#060010",
      },
      boxShadow: {
        'inner-glow': 'inset 500px 500px 1000px #000000',
      },
    },
  },
  plugins: [],
}