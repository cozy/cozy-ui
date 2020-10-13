import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'

export const smallSize = 16
export const mediumSize = 24
export const largeSize = 32

export default withStyles({
  root: {
    width: 32,
    justifyContent: 'center'
  }
})(ListItemIcon)
