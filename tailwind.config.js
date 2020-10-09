module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        redbits: '#ff4b5c',
        graybits: {
          100: '#454545',
          500: '#3a3a3a',
          900: '#2e2e2e',
        },
        whitebits: '#f5f5f5',
      },
      fontFamily: {
        fredoka: ['Fredoka One', 'cursive'],
        mont: ['Montserrat', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      width: {
        'al-mid': '49.5%',
      },
      maxHeight: {
        0: '0',
      },
      lineHeight: {
        12: '3rem',
      },
      transitionProperty: {
        height: 'height',
        maxh: 'max-height',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    transitionDelay: ['responsive', 'hover', 'focus'],
  },
}
