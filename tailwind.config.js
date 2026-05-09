/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17211f',
        muted: '#52625f',
        mist: '#f7faf8',
        cloud: '#eef4f2',
        teal: {
          50: '#e9fbf8',
          100: '#c8f5ef',
          300: '#77ded0',
          500: '#0f8b7f',
          700: '#005c55',
          900: '#002b27',
        },
        orange: {
          100: '#ffe4d7',
          300: '#ffb598',
          500: '#c7643d',
          700: '#7f4025',
        },
      },
      fontFamily: {
        display: ['Lexend', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 92, 85, 0.10)',
        glow: '0 22px 80px rgba(119, 222, 208, 0.28)',
      },
      borderRadius: {
        card: '1.5rem',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        rise: 'rise 700ms ease both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
