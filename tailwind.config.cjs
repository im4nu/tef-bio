/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'instagram': "url('/src/assets/images/Insta.png')",
        'linkedin': "url('/src/assets/images/linkedin.png')",
        'whatsapp': "url('/src/assets/images/whats.png')",
        'gmail': "url('/src/assets/images/mail.png')",
      }

    },
  },
  plugins: [],
}
