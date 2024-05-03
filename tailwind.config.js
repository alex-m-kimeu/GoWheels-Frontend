/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0 0 10px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#EA580C',
        'variant': '#3e413e',
        'link': '#646864',
        'h1': '#323432',
        'h2': '#575b57',
        'p': '#646864',
      },
      fontFamily:{
        'body':"Poppins, sans-serif",
      }
    },
  },
  plugins: [],
}