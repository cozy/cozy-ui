export default () => {
  return (
    navigator && navigator.userAgent && navigator.userAgent.includes('Argos')
  )
}
