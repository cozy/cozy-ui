A navigation list is used to present choices of navigation to the user.
It will be rendered slightly differently on desktop or mobile, with
desktop sections rendered into cards while on mobile, it will rendered
simply as a list with subheaders.

```jsx
import { useState } from 'react'
import { Tabs, Tab } from 'cozy-ui/transpiled/react/MuiTabs'
import Icon from 'cozy-ui/transpiled/react/Icon';
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import Divider from 'cozy-ui/transpiled/react/Divider'
import ListItemIcon, {smallSize, mediumSize, largeSize} from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
import useBreakpoints, { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints';
import NavigationList, {
  NavigationListSection,
  NavigationListHeader
} from 'cozy-ui/transpiled/react/NavigationList'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'

import GearIcon from "cozy-ui/transpiled/react/Icons/Gear";
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";
import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";
import TrashIcon from "cozy-ui/transpiled/react/Icons/Trash";
import BankIcon from "cozy-ui/transpiled/react/Icons/Bank";

const NavigationListExample = ({ style }) => {
  return (
    <NavigationList style={style}>
        <NavigationListHeader>General</NavigationListHeader>
        <NavigationListSection>
       <ListItem>
          <ListItemIcon>
            <Icon icon={GearIcon} size={mediumSize} />
          </ListItemIcon>
          <ListItemText primary="General settings" />
          <ListItemSecondaryAction>
            <Icon
              icon={RightIcon}
              size={smallSize}
              className="u-mr-1"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" />
        <ListItem>
          <ListItemIcon>
            <Icon icon={GearIcon} size={largeSize} />
          </ListItemIcon>
          <ListItemText primary="A large icon does not change size of icon area" />
          <ListItemSecondaryAction>
            <Icon
              icon={RightIcon}
              size={smallSize}
              className="u-mr-1"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" />
        <ListItem>
          <ListItemIcon>
            <Icon icon={PeopleIcon} size={smallSize} />
          </ListItemIcon>
          <ListItemText
            primary="User preferences"
            secondary="Notifications and theme"
          />
          <ListItemSecondaryAction>
            <Icon
              icon={RightIcon}
              size={smallSize}
              className="u-mr-1"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" />
        <ListItem>
          <ListItemIcon>
            <Icon icon={TrashIcon} className="u-error" size={smallSize} />
          </ListItemIcon>
          <ListItemText
            primary="Delete account"
            primaryTextClassName="u-error"
            secondaryTextClassName="u-error"
            secondary="Permanently delete all your data"
          />
        </ListItem>
      </NavigationListSection>
      <NavigationListHeader>Accounts</NavigationListHeader>
      <NavigationListSection>
        <ListItem>
          <ListItemIcon>
            <Icon icon={BankIcon} size={smallSize} />
          </ListItemIcon>
          <ListItemText primary="Bank accounts" />
          <ListItemSecondaryAction>
            <Icon
              icon={RightIcon}
              size={smallSize}
              className="u-mr-1"
            />
          </ListItemSecondaryAction>
        </ListItem>
      </NavigationListSection>
    </NavigationList>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsExample = () => {
  const { isMobile } = useBreakpoints()
  const [tab, setTab] = useState('nav')
  const handleChange = (event, value) => setTab(value)

  return (
    <div>
      <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
        <Tab value='nav' label="Nav" {...a11yProps(0)} />
        <Tab value='details' label="Details" {...a11yProps(1)} />
      </Tabs>
      <Divider className='u-mb-1' />
      { tab == 'nav' ?
        <NavigationListExample /> : null }
      { tab == 'details' ?
        <Typography variant='body1'>
          { content.ada.short }
        </Typography> : null
      }
    </div>
  )
}

<BreakpointsProvider>
  <Stack spacing='xl'>
    <NavigationListExample />
    <TabsExample />
  </Stack>
</BreakpointsProvider>
```
