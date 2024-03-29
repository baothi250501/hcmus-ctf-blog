const sharedTheme = require('./src/themes/tailwind/tailwind.theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      ...sharedTheme.fontFamily,
    },
    screens: {
      desktop: '768px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      fontSize: {
        title60: ['60px', '72px'], // bold
        title42: ['42px', '60px'], // bold
        title32: ['32px', '40px'], // bold
        title24: ['24px', '36px'], // bold
        subtitle20: ['20px', '30px'], // semibold | bold
        subtitle18: ['18px', '28px'], // semibold | medium
        body16: ['16px', '24px'], // bold | medium
        body14: ['14px', '22px'], // semibold
        caption12: ['12px', '18px'], // semibold
      },
      colors: {
        'primary-10': '#e7e8ea',
        'primary-20': '#b6bac1',
        'primary-30': '#545e6e',
        'primary-40': '#233045',
        'primary-50': '#0a1930',
        'primary-60': '#071222',
        'primary-70': '#050d18',
        'primary-80': '#03070e',
        'primary-90': '#010205',
        'secondary-10': '#f5d9e9',
        'secondary-20': '#eec0da',
        'secondary-30': '#e7a7cb',
        'secondary-40': '#e39ac4',
        'secondary-50': '#dc81b5',
        'secondary-60': '#ed619f',
        'secondary-70': '#ea4a91',
        'secondary-80': '#e83484',
        'secondary-90': '#e51d76',
      },
      boxShadow: {
        shadow1: '0px 4px 40px rgba(43, 89, 255, 0.08)',
        shadow4: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        shadow8: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        shadow4Revert: '0.0px -2.0px 4.0px 0px rgba(0, 0, 0, 0.1)',
        dropshadow: '0px 4px 40px rgba(255, 95, 35, 0.08)',
        'dropshadow-form': '0px 8px 32px rgba(28, 141, 254, 0.12)',
        depth4: '0px 64px 64px -48px rgba(15, 15, 15, 0.08)',
        'shadow-special': '0px 16px 48px rgba(0, 0, 0, 0.08)',
        'inner-shadow': 'inset 0px -2px 0px #EA5800',
      },
      maxWidth: {
        '8xl': '1320px',
      },
      height: {
        'header-desktop': '84px',
        'header-mobile': '104px',
      },
      minHeight: {
        content: '50vh',
      },
      spacing: {
        'header-desktop': '84px',
        'header-mobile': '80px',
        'header-navbar': '358px',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
  ],
};
