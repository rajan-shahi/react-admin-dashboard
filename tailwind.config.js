/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        inika: ['Inika', 'serif'],
        imprima: ['Imprima', 'sans-serif'],
        inder: ['Inder', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#BD7651',
        },
        secondary: {
          DEFAULT: '#ECEBEB',
        },
        dark: {
          DEFAULT: '#1E1E1E',
          400: '#1A1A1A',
          300: '#414141',
        },
        success: {
          DEFAULT: '#349A44',
        },
        warning: {
          DEFAULT: '#FF9A00',
        },
        danger: {
          DEFAULT: '#EE2E36',
        },
      },
    },
  },
  plugins: [],
}

