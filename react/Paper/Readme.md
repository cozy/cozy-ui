```jsx
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Variants from 'docs/components/Variants';

import Paper from 'cozy-ui/transpiled/react/Paper';
import Typography from 'cozy-ui/transpiled/react/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

const PaperSheet = ({ classes, square, elevation }) => {
  return (
    <Paper className={classes.root} elevation={elevation} square={square}>
      <Typography variant="h3" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  )
}


const StyledPaperSheet = withStyles(styles)(PaperSheet);

const initialVariants = [
  { square: true }
];

<MuiCozyTheme>
    <Variants initialVariants={initialVariants}>{
      variant => (
        <StyledPaperSheet elevation="1" square={variant.square} />
      )
    }</Variants>
</MuiCozyTheme>
```
