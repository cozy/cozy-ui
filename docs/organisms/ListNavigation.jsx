import React from 'react'
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction'
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader'
import Icon from 'cozy-ui/transpiled/react/Icon'

const ListNavigation = ({ style }) => {
  return (
    <List style={style}>
      <ListSubheader>General</ListSubheader>
      <ListItem>
        <ListItemIcon>
          <Icon icon="gear" width="24" height="24" />
        </ListItemIcon>
        <ListItemText primaryText="General settings" />
        <ListItemSecondaryAction>
          <Icon
            icon="right"
            width="24"
            height="24"
            className="u-mr-1 u-coolGrey"
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon icon="people" width="24" height="24" />
        </ListItemIcon>
        <ListItemText
          primaryText="User preferences"
          secondaryText="Notifications and theme"
        />
        <ListItemSecondaryAction>
          <Icon
            icon="right"
            width="24"
            height="24"
            className="u-mr-1 u-coolGrey"
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon icon="trash" className="u-error" width="24" height="24" />
        </ListItemIcon>
        <ListItemText
          primaryText="Delete account"
          primaryTextClassName="u-error"
          secondaryTextClassName="u-error"
          secondaryText="Permanently delete all your data"
        />
      </ListItem>
      <ListSubheader>Accounts</ListSubheader>
      <ListItem>
        <ListItemIcon>
          <Icon icon="bank" width="24" height="24" />
        </ListItemIcon>
        <ListItemText primaryText="Bank accounts" />
        <ListItemSecondaryAction>
          <Icon
            icon="right"
            width="24"
            height="24"
            className="u-mr-1 u-coolGrey"
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default ListNavigation
