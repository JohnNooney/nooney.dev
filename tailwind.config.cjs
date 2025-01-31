/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
        accent: '#f59e0b',
        'blue-lighter': '#93c5fd',
        'blue-light': '#60a5fa',
        'blue-dark': '#2563eb',
        'blue-darker': '#1d4ed8'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
