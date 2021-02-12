module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#280046',
          850: '#320064',
          750: '#3c007d',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
