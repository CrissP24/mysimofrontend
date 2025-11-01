/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00a6a6', // turquesa principal
          dark: '#007e7e',
          light: '#3ccccc',
        },
        accent: '#ff6b6b', // coral
        bg: '#f5f7fa',
        text: '#222831',
        button: '#1976ff'
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        btn: '9999px'
      }
    },
  },
  plugins: [],
}
