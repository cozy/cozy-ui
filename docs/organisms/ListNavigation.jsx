import React from 'react'
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction'
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Card from 'cozy-ui/transpiled/react/Card'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

const DesktopSection = ({ children }) => (
  <Card className="u-p-0 u-ov-hidden">{children}</Card>
)

const DesktopSectionWrapper = ({ children }) => (
  <Stack spacing="s">{children}</Stack>
)

const NavigationListSection = ({ children }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <List>{children}</List>
  ) : (
    <DesktopSection>{children}</DesktopSection>
  )
}

const NavigationListWrapper = ({ children, style }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <div style={style}>{children}</div>
  ) : (
    <DesktopSectionWrapper style={style}>{children}</DesktopSectionWrapper>
  )
}

const ListNavigation = ({ style }) => {
  return (
    <NavigationListWrapper style={style}>
      <NavigationListSection>
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
      </NavigationListSection>
      <NavigationListSection>
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
      </NavigationListSection>
    </NavigationListWrapper>
  )
}

export default ListNavigation
