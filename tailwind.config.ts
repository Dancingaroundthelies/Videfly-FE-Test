import {
  dynamicIconsPlugin,
  getIconCollections,
  iconsPlugin,
} from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', ...defaultTheme.fontFamily.sans],
        secondary: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #7F52FF, #FB8570)',
        'secondary-gradient':
          'linear-gradient(109.89deg, #7F52FF 1.07%, #4C3199 100%)',
        'hero-gradient':
          'linear-gradient(315.94deg, #F1EDFD -8.05%, #B9AFF7 32.61%, #7261EF 99.96%)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'infinite-scroll-left': 'infinite-scroll-left 30s linear infinite',
      },
      boxShadow: {
        'custom-shadow': '0px 8px 80px rgba(43, 56, 76, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-hamburgers'),
    iconsPlugin({
      collections: getIconCollections([
        'solar',
        'carbon',
        'line-md',
        'streamline',
        'hugeicons',
        'cuida',
      ]),
    }),
    dynamicIconsPlugin(),
  ],
} satisfies Config;
