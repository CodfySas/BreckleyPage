/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'berckley-primary': '#2C3188',
        'berckley-secondary': '#7180A1',
        'berckley-light': '#C7DCE6',
        'berckley-accent': '#F6E824',
        'berckley-red': '#E31D28',
      },
      fontFamily: {
        'sans': ['Montserrat','Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'berckley': '0 10px 25px rgba(44, 49, 136, 0.15)',
        'berckley-lg': '0 20px 40px rgba(44, 49, 136, 0.2)',
      },
      backgroundImage: {
        'berckley-gradient': 'linear-gradient(135deg, #2C3188 0%, #7180A1 50%, #C7DCE6 100%)',
        'berckley-gradient-reverse': 'linear-gradient(135deg, #C7DCE6 0%, #7180A1 50%, #2C3188 100%)',
      },
    },
  },
  plugins: [],
};