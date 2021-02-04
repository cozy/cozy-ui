## Default

```
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

<>
  <Accordion>
    <AccordionSummary>
      Click to expand/collapse the first item
    </AccordionSummary>
    <AccordionDetails>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary>
      Click to expand/collapse the second item
    </AccordionSummary>
    <AccordionDetails>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary>
      Click to expand/collapse the third item
    </AccordionSummary>
    <AccordionDetails>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </AccordionDetails>
  </Accordion>
</>
```

## Customized

These are material-ui components, so you can customize it like any other:

```
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from 'cozy-ui/transpiled/react/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from 'cozy-ui/transpiled/react/Icon';

import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";

const StyledSummary = withStyles(() => ({
  expand: {}, // required to use `&$expanded` selector
  content: {
    paddingLeft: '0.75rem',
    order: 1,
  },
  expandIcon: {
    order: 0,
    marginLeft: '0.5rem',
    transform: 'rotate(-90deg)',
    '&$expanded': {
      transform: 'rotate(0)'
    }
  }
}))(AccordionSummary);

const StyledDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(3, 4)
  }
}))(AccordionDetails);

<Accordion>
  <StyledSummary
    expandIcon={<Icon icon={BottomIcon} color="black" width={16} />}
    IconButtonProps={{
      disableRipple: true
    }}
  >
    Click to expand/collapse the first item
  </StyledSummary>
  <StyledDetails>
    <Typography variant='body1'>
      Lorem ipsum dolor sit amet consectetur
    </Typography>
  </StyledDetails>
</Accordion>
```

See [Material UI documentation](https://material-ui.com/demos/expansion-panels/) to learn more about Accordion.
