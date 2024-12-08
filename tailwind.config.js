/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '0.6': '0.6', // Adds a custom flex value
      },
    },
  },
  plugins: [],
}
