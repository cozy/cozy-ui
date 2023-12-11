import MuiuseMediaQuery from '@material-ui/core/useMediaQuery'

const useMediaQuery = (args, options) =>
  MuiuseMediaQuery(args, { ...options, noSsr: true })

export default useMediaQuery
