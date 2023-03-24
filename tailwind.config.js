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
      maxWidth: {
        main: '960px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
