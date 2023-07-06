import List from '@material-ui/core/List';
import { withStyles } from "cozy-ui/transpiled/react/styles";
export var BorderedList = withStyles({
  root: {
    borderTop: '1px solid var(--silver)'
  }
})(List);
export default List;