/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FBF9F5',
          100: '#F5F0E6',
          200: '#E8DCB8',
          300: '#D6BF8A',
          400: '#B89B5C',
          500: '#8B6D4A',
          600: '#765A3B',
          700: '#5C442D',
          800: '#433120',
          900: '#2A1F14',
        },
        sand: {
          DEFAULT: '#E3D7C5',
          light: '#F3EDE2',
          dark: '#BCA88C',
          card: '#D7C4A5',
        },
        earth: {
          dark: '#3E342B',
          muted: '#6E6255',
          bg: '#E4DDD3',
          cardBg: 'rgba(215, 196, 165, 0.75)',
        }
      },
      fontFamily: {
        sans: ['Prompt', 'Sarabun', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
