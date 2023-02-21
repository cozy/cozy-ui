export const makeTypoColor = ({ theme, active, disabled }) => {
  if (disabled) {
    return theme.palette.text.disabled
  }
  if (active) {
    return theme.palette.primary.main
  }
  return theme.palette.text.primary
}

export const makeButtonShadow = ({ theme, active, disabled }) => {
  if (disabled || !active) {
    return `inset 0 0 0 1px ${theme.palette.border.main}`
  }
  return `none`
}
