Content needs to be separated into sections and accessed via a single content area using a flat navigation structure that does not refresh the page when selected.


```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'cozy-ui/transpiled/react/Tabs';
import Icon from 'cozy-ui/transpiled/react/Icon';
import ListSubHeader from '../MuiCozyTheme/ListSubheader'
import ListNavigation from '../../docs/organisms/ListNavigation'

const listNavigationStyle = { marginTop: -1 };

<MuiCozyTheme>
  <Tabs initialActiveTab='navlist'>
    <TabList>
      <Tab name='navlist'>Navigation list</Tab>
      <Tab name='details'>Details</Tab>
    </TabList>
    <TabPanels>
      <TabPanel className='u-pt-0' name='navlist'>
        <ListNavigation style={listNavigationStyle} />
      </TabPanel>
      <TabPanel name='details'>
        { content.ada.short }
      </TabPanel>
    </TabPanels>
  </Tabs>
  <div className='u-m-2'></div>
</MuiCozyTheme>
```

Tabs can have the `inverted` prop to be in the primary color of the app.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'cozy-ui/transpiled/react/Tabs';
import ListNavigation from '../../docs/organisms/ListNavigation';

<MuiCozyTheme>
  <Tabs initialActiveTab='navlist'>
    <TabList inverted>
      <Tab name='navlist'>General</Tab>
      <Tab name='details'>Details</Tab>
    </TabList>
    <TabPanels>
      <TabPanel name='navlist'>
        General tab
      </TabPanel>
      <TabPanel name='details'>
        Details tab
      </TabPanel>
    </TabPanels>
  </Tabs>
</MuiCozyTheme>
```

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'cozy-ui/transpiled/react/Tabs';
import ListNavigation from '../../docs/organisms/ListNavigation';

<MuiCozyTheme>
  <div style={{ width: 300, marginTop: 32 }}>
    <Tabs initialActiveTab='navlist'>
      <TabList inverted>
        <Tab name='navlist'>General</Tab>
        <Tab name='details'>Details</Tab>
        <Tab name='similar'>Very long title</Tab>
        <Tab name='others'>Others</Tab>
      </TabList>
      <TabPanels>
        <TabPanel name='navlist'>
          General tab
        </TabPanel>
        <TabPanel name='details'>
          Details tab
        </TabPanel>
        <TabPanel name='similar'>
          Content for "Very long title" tab
        </TabPanel>
        <TabPanel name='others'>
          Others tab
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>

</MuiCozyTheme>
```
