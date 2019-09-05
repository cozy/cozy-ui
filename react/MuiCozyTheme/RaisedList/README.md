```
const MuiCozyTheme = require('..').default
const RaisedList = require('.').default
const ListItem = require('@material-ui/core/ListItem').default
const ListItemText = require('../../ListItemText').default;

<MuiCozyTheme>
  <RaisedList>
    <ListItem>
      <ListItemText primaryText="cozy.io" secondaryText="Claude Douillet" />
    </ListItem>
    <ListItem>
      <ListItemText primaryText="cozy.io" secondaryText="Isabelle Durand" />
    </ListItem>
    <ListItem>
      <ListItemText primaryText="cozy.io" secondaryText="Geneviève Durand" />
    </ListItem>
  </RaisedList>
</MuiCozyTheme>
```
