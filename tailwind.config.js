/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#111c38',
          850: '#14234b',
          800: '#182956',
          700: '#20366d',
          600: '#2b478c',
        },
        brand: {
          blue: '#0284c7',
          cyan: '#00d2ff',
          neon: '#00f2fe',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

