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
        'primary': '#F3F4F6',
        'secondary': '#EA580C',
        'variant': '#000000',
        'link': '#646864',
        'text': '#4B5563',
        'h2': '#575b57',
        'paragraph': '#646864',
      },
      fontFamily:{
        'body':"Nunito Sans, sans-serif",
      },
      screens: {
        'sm': '640px', 
        'md': '768px', 
        'lg': '1025px',
      },
    },
  },
  plugins: [],
}