```jsx
import Variants from 'cozy-ui/docs/components/Variants';

import Paper from 'cozy-ui/transpiled/react/Paper';
import Stack from 'cozy-ui/transpiled/react/Stack';
import Typography from 'cozy-ui/transpiled/react/Typography';
import { withStyles } from 'cozy-ui/transpiled/react/styles';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: 'relative'
  }
});

const PaperExample = ({ classes, square, elevation }) => {
  return (
    <Paper className={classes.root} elevation={elevation} square={square}>
      <Typography variant="h3" component="h3">
        This is a sheet of paper
      </Typography>
      <div style={{ position: 'absolute', right: '1rem', top: '1rem' }}>
        <Typography variant='subtitle1'>elevation {elevation}</Typography>
      </div>
      <Typography variant='body1' component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  )
};


const StyledPaperExample = withStyles(styles)(PaperExample);

const initialVariants = [
  { square: true }
];

<Variants initialVariants={initialVariants}>{
  variant => (
    <Stack spacing='m'>
      <StyledPaperExample elevation={0} square={variant.square} />
      <StyledPaperExample elevation={1} square={variant.square} />
      <StyledPaperExample elevation={4} square={variant.square} />
      <StyledPaperExample elevation={16} square={variant.square} />
      <StyledPaperExample elevation={24} square={variant.square} />
      <StyledPaperExample elevation={25} square={variant.square} />
    </Stack>
  )
}</Variants>
```
