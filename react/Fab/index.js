import Fab from '@material-ui/core/Fab'

import { isTwakeTheme } from '../helpers/isTwakeTheme'

Fab.defaultProps = {
  size: isTwakeTheme() ? 'medium' : 'large'
}

export default Fab
export { default as ExtendableFab } from './ExtendableFab'
