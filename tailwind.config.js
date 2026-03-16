/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clovenet': {
          blue: '#1a73e8',      // Rangi ya Msingi (Primary)
          'blue-dark': '#1557b0',
          'blue-light': '#e8f0fe',
          green: '#34a853',     // Kwa vitu "Sahihi/Good"
          yellow: '#fbbc04',    // Kwa tahadhari
          red: '#ea4335',       // Kwa makosa/Bad
          bg: '#f8faff',        // Rangi ya background
          dark: '#0f1624',      // Kwa Dark Mode
        }
      },
      borderRadius: {
        'clovenet': '18px',     // Kama ilivyokuwa kwenye CSS (--radius)
      }
    },
  },
  plugins: [],
}