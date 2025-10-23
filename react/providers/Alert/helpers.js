export const handleClose = (state, setState) => (event, reason) => {
  const { noClickAway, noTimeOut } = state

  if (reason === 'clickaway' && noClickAway) {
    return
  }

  if (reason === 'timeout' && noTimeOut) {
    return
  }

  return setState({ ...state, open: false })
}
