import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

export const BorderedList = withStyles({
  root: {
    borderTop: '1px solid var(--silver)'
  }
})(List)

export default List
