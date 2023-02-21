import List from '@mui/material/List'

import { withStyles } from '../../styles'

export const BorderedList = withStyles({
  root: {
    borderTop: '1px solid var(--silver)'
  }
})(List)

export default List
