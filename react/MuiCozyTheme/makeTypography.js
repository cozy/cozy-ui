export const makeTypography = palette => ({
  fontFamily: 'var(--primaryFont)',
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 1.087,
    letterSpacing: -0.8
  },
  h2: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 1.313,
    letterSpacing: -0.4
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1.167
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.167
  },
  h5: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.313
  },
  h6: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 1.313
  },
  subtitle1: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 1.358,
    textTransform: 'uppercase'
  },
  subtitle2: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 1.334,
    textTransform: 'uppercase'
  },
  body1: {
    fontSize: 16,
    lineHeight: 1.313
  },
  body2: {
    fontSize: 14,
    lineHeight: 1.313
  },
  button: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 1.313
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.313,
    color: palette.text.secondary,
    display: 'block'
  }
})
