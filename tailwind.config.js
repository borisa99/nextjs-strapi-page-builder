/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
    },
    fontSize: {
      xxs: ['0.75rem', { lineHeight: '1em' }], // 12px
      xs: ['0.8125rem', { lineHeight: '1.25em' }], // 13px
      sm: ['0.875rem', { lineHeight: '1.5em' }], // 14px
      md: ['0.9375rem', { lineHeight: '1.5em' }], // 15px
      lg: ['1rem', { lineHeight: '1.5em' }], // 16px
      xl: ['1.125rem', { lineHeight: '1.3em' }], // 18px
      '2xl': ['1.25rem', { lineHeight: '1.3em' }], // 20px
      '3xl': ['1.5rem', { lineHeight: '1.3em' }], // 24px
      '4xl': ['1.875rem', { lineHeight: '1.3em' }], // 30px
      '5xl': ['2.25rem', { lineHeight: '1.3em' }], // 36px
      '6xl': ['2.5rem', { lineHeight: '1.3em' }], // 40px
      '7xl': ['3rem', { lineHeight: '1.2em' }], // 48px
      '8xl': ['3.75rem', { lineHeight: '1.2em' }], // 60px
      '9xl': ['4.5rem', { lineHeight: '1.2em' }], // 72px
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: {
          DEFAULT: '#fff',
          4: '#FFFFFF0A',
          5: '#FFFFFF0D',
          7: '#FFFFFF12',
          30: '#FFFFFF4D',
        },
        gray: {
          50: '#E7E8EE',
          100: '#D1D5E0',
          200: '#D1D5E0',
          300: '#8F91A1',
          400: '#4A4C5C',
          500: '#282C39',
          600: '#20232F',
          700: '#181B24',
          800: '#13141B',
          900: '#0A0B0F',
        },
        green: {
          12: '#4393591F',
          15: '#319A5426',
          300: '#3EB966',
          400: '#3BA85E',
          500: '#319A53',
          600: '#2A8748',
        },
        blue: {
          12: '#5071B11F',
          15: '#5071B126',
          300: '#6E9AEE',
          400: '#527FD4',
          500: '#5071B1',
          600: '#4264A8',
        },
        turquoise: {
          500: '#4ABCA2',
          600: '#37A88E',
          700: '#397668',
        },
        purple: {
          15: '#AF42AC26',
          500: '#AF42AC',
        },
        orange: {
          15: '#EB732F26',
          500: '#EB732F',
        },
        red: {
          15: '#D94A4A26',
          500: '#D94A4A',
        },
        yellow: {
          15: '#C9A64B26',
          500: '#C9A64B',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}
