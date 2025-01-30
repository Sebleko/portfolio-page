/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/theme.css", // Ensure Tailwind reads the theme file
  ],
  plugins: [],
};
