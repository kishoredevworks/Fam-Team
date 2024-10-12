/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Tailwind scans inside src folder
    './public/index.html'  // Ensure it scans your public folder too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

