function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return `rgba(var(${cssVariable}), ${opacityValue})`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: withOpacity('--bee-primary-color'),
      },

      maxWidth: {
        main: '960px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
