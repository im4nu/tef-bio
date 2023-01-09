/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'instagram': "url('/src/assets/images/image 1.png')",
        'linkedin': "url('/src/assets/images/image 2.png')",
        'spotify': "url('/src/assets/images/image 3.png')",
        'gmail': "url('/src/assets/images/image 4.png')",
      }

    },
  },
  plugins: [],
}
