import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          200: '#383544',
          300: '#484554',
          400: '#6A6676',
        },
        select: {
          100: '#FCF7FF',
          200: '#ADA9BB',
        },
        red: {
          100: '#F43F5E',
        },
        blue: {
          100: '#8576FF',
        },
        gray: {
          6: '#F2F2F7',
        },
        green: {
          500: '#24AE7C',
          600: '#0D2A1F',
        },
        light: {
          100: '#f1f5f8',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
    },
  },
  plugins: [],
};
export default config;
