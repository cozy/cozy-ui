A navigation list is used to present choices of navigation to the user.
It will be rendered slightly differently on desktop or mobile, with
desktop sections rendered into cards while on mobile, it will rendered
simply as a list with subheaders.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'cozy-ui/transpiled/react/Tabs';
import Icon from 'cozy-ui/transpiled/react/Icon';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction'
import useBreakpoints, { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints';
import NavigationList, {
  NavigationListSection,
  NavigationListHeader
} from 'cozy-ui/transpiled/react/NavigationList'
import Stack from 'cozy-ui/transpiled/react/Stack'


const NavigationListExample = ({ style }) => {
  return (
    <NavigationList style={style}>
        <NavigationListHeader>General</NavigationListHeader>
        <NavigationListSection>
        <ListItem>
          <ListItemIcon>
            <Icon icon="gear" width="16" height="16" />
          </ListItemIcon>
          <ListItemText primaryText="General settings" />
          <ListItemSecondaryAction>
            <Icon
              icon="right"
              width="16"
              height="16"
              className="u-mr-1 u-coolGrey"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon icon="people" width="16" height="16" />
          </ListItemIcon>
          <ListItemText
            primaryText="User preferences"
            secondaryText="Notifications and theme"
          />
          <ListItemSecondaryAction>
            <Icon
              icon="right"
              width="16"
              height="16"
              className="u-mr-1 u-coolGrey"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon icon="trash" className="u-error" width="16" height="16" />
          </ListItemIcon>
          <ListItemText
            primaryText="Delete account"
            primaryTextClassName="u-error"
            secondaryTextClassName="u-error"
            secondaryText="Permanently delete all your data"
          />
        </ListItem>
      </NavigationListSection>
      <NavigationListHeader>Accounts</NavigationListHeader>
      <NavigationListSection>
        <ListItem>
          <ListItemIcon>
            <Icon icon="bank" width="16" height="16" />
          </ListItemIcon>
          <ListItemText primaryText="Bank accounts" />
          <ListItemSecondaryAction>
            <Icon
              icon="right"
              width="16"
              height="16"
              className="u-mr-1 u-coolGrey"
            />
          </ListItemSecondaryAction>
        </ListItem>
      </NavigationListSection>
    </NavigationList>
  )
}

const tabsNavigationListStyle = { marginTop: -1 };

const TabsExample = () => {
  const { isMobile } = useBreakpoints()
  return (
    <>
      <p>
        With tabs, it is necessary to tweak a bit the style to prevent a double border on mobile.
      </p>
      <Tabs initialActiveTab='navlist'>
        <TabList>
          <Tab name='navlist'>Navigation list</Tab>
          <Tab name='details'>Details</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={isMobile ? 'u-pt-0' : 'u-pt-1-half'} name='navlist'>
            <NavigationListExample style={tabsNavigationListStyle} />
          </TabPanel>
          <TabPanel name='details'>
            { content.ada.short }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

<BreakpointsProvider>
  <MuiCozyTheme>
    <Stack spacing='xl'>
      <NavigationListExample />
      <TabsExample />
    </Stack>
  </MuiCozyTheme>
</BreakpointsProvider>
```
