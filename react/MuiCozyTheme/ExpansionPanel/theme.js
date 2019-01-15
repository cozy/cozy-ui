const radiusValue = '6px'
const borderRadius = {
  borderTopLeftRadius: radiusValue,
  borderTopRightRadius: radiusValue,
  borderBottomLeftRadius: radiusValue,
  borderBottomRightRadius: radiusValue
}

const MuiExpansionPanel = {
  root: {
    ...borderRadius,
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
    borderWidth: '0.0625rem',
    borderStyle: 'solid',
    borderColor: 'var(--silver)',
    overflow: 'hidden',
    marginBottom: '1rem',
    '&:first-child': borderRadius,
    '&:last-child': borderRadius
  }
}

export default MuiExpansionPanel
