import List from '@material-ui/core/List'

import { withStyles } from '../styles'

export const BorderedList = withStyles({
  root: {
    borderTop: '1px solid var(--silver)'
  }
})(List)

export default List
