import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f5',
          100: '#e1f3eb',
          200: '#c3e7d7',
          300: '#a5dbc3',
          400: '#55a630',
          500: '#176b3a',
          600: '#145a30',
          700: '#104826',
          800: '#0c361c',
          900: '#082412',
        },
        accent: {
          50: '#fffbf0',
          100: '#fff7e1',
          200: '#ffefe3',
          300: '#f4c542',
          400: '#f0b830',
          500: '#e8a800',
          600: '#d49700',
          700: '#b88200',
          800: '#9c6d00',
          900: '#805800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
