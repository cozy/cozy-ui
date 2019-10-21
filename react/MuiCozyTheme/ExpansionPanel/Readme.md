## Default

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

<MuiCozyTheme>
  <ExpansionPanel>
    <ExpansionPanelSummary>
      Click to expand/collapse the first item
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel>
    <ExpansionPanelSummary>
      Click to expand/collapse the second item
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel>
    <ExpansionPanelSummary>
      Click to expand/collapse the third item
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </ExpansionPanelDetails>
  </ExpansionPanel>
</MuiCozyTheme>
```

## Customized

These are material-ui components, so you can customize it like any other:

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';
import Icon from 'cozy-ui/transpiled/react/Icon';

const StyledSummary = withStyles(() => ({
  expand: {}, // required to use `&$expanded` selector
  content: {
    paddingLeft: '3rem'
  },
  expandIcon: {
    left: '0.375rem',
    right: 'auto',
    transform: 'translateY(-50%) rotate(-90deg)',
    '&$expanded': {
      transform: 'translateY(-50%) rotate(0)'
    }
  }
}))(ExpansionPanelSummary);

<MuiCozyTheme>
  <ExpansionPanel>
    <StyledSummary
      expandIcon={<Icon icon="bottom" color="black" width={16} />}
      IconButtonProps={{
        disableRipple: true
      }}
    >
      Click to expand/collapse the first item
    </StyledSummary>
    <ExpansionPanelDetails>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </ExpansionPanelDetails>
  </ExpansionPanel>
</MuiCozyTheme>
```

See [Material UI documentation](https://material-ui.com/demos/expansion-panels/) to learn more about Expansion Panels.
