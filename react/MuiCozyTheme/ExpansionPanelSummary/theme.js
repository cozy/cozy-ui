const MuiExpansionPanelSummary = {
  expanded: {},
  root: {
    backgroundColor: 'var(--paleGrey)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    minHeight: '3.5rem',
    padding: 0,
    color: 'var(--charcoalGrey)',
    '&$expanded': {
      minHeight: '3.5rem'
    }
  },
  content: {
    margin: '0.75rem 0',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    '& > :last-child': {
      paddingRight: 0
    },
    '&$expanded': {
      margin: '0.75rem 0'
    }
  }
}

export default MuiExpansionPanelSummary
