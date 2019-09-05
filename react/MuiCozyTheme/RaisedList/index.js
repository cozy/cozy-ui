import BaseList from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    borderRadius: 8,
    overflow: 'hidden',
    borderLeft: '1px solid var(--silver)',
    borderRight: '1px solid var(--silver)',
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)'
  }
}

export default withStyles(styles, 'RaisedList')(BaseList)
