import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    fontFamily: {
      sans: ['"UNIQAGalano"', ...defaultTheme.fontFamily.sans],
      rollestonText: ['"Rolleston Text"', ...defaultTheme.fontFamily.serif],
      display: ['"Rolleston Display"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      popover: {
        DEFAULT: '#ffffff',
      },
      blue: {
        1: '#005CA9',
        2: '#00628D',
        3: '#86C2EB',
        4: '#003B6C',
        5: '#CCDEEE',
      },
      antracite: {
        1: '#3C3C3B',
      },
      grey: {
        1: '#C6C7C7',
      },
      green: {
        1: '#03B675',
        2: '#008890',
        3: '#007432',
      },
      orange: {
        1: '#EC6502',
        2: '#F7A600',
      },
      purple: {
        1: '#8A1778',
      },
    },
    fontSize: {
      sm: ['0.8125rem', { lineHeight: '1', letterSpacing: '-0.01em' }], // -1%
      base: ['1rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }], // -3%
      lg: ['1.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }], // -3%
      xl: ['2rem', { lineHeight: '1.05', letterSpacing: '-0.05em' }], // -5%
      '2xl': ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.05em' }], // -5%
      '3xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.05em' }], // -5%
      '4xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }], // -4%
      '5xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }], // -5%
      '6xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.05em' }], // -5%
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
      screens: {
        DEFAULT: '100%',
      },
    },
    extend: {
      spacing: {
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        31: '7.75rem',
        34: '8.5rem',
        42: '10.5rem',
        54: '13.5rem',
        90: '22.5rem',
      },
      gridRowStart: {
        15: '15',
        19: '19',
        20: '20',
      },
    },
  },
  plugins: [],
} satisfies Config;
