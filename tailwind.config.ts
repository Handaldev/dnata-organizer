import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f6f2',
          100: '#d8ecdf',
          200: '#b3d9c1',
          300: '#7fbf9a',
          400: '#4fa472',
          500: '#2d8551',
          600: '#1f6a3e',
          700: '#1b5433',
          800: '#163f27',
          900: '#0e2819',
          950: '#071610',
        },
        gold: {
          50:  '#fdf9ee',
          100: '#faf0d0',
          200: '#f4de9d',
          300: '#edc563',
          400: '#e6ac37',
          500: '#c8941f',
          600: '#a87418',
          700: '#875717',
          800: '#6f4419',
          900: '#5d3918',
          950: '#361e09',
        },
        cream: {
          50:  '#fffef9',
          100: '#fdf9ee',
          200: '#faf4e0',
          300: '#f5ecc8',
          400: '#ecd9a0',
          500: '#dfc278',
        },
        'dinata-green': '#1B3A2E',
        'dinata-gold':  '#C8A96E',
        'dinata-cream': '#FAF8F4',
        'dinata-rose':  '#F5EDE8',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        dm:        ['var(--font-dm-sans)',   'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-left': 'slideLeft 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
