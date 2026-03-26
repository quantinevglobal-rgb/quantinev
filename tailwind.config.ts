import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eaf0',
          100: '#c5cade',
          200: '#9fa8c7',
          300: '#7886b0',
          400: '#5b6d9f',
          500: '#3e548e',
          600: '#374c86',
          700: '#2d417b',
          800: '#1b2a5b',
          900: '#0d1b3e',
          950: '#070e21',
        },
        accent: {
          blue: '#00b4ff',
          gold: '#d4a843',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          light: '#141420',
          card: '#1a1a2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
