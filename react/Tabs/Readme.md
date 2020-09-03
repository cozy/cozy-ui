Content needs to be separated into sections and accessed via a single content area using a flat navigation structure that does not refresh the page when selected.

Tabs can have the `inverted` prop to be in the primary color of the app.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'cozy-ui/transpiled/react/Tabs';

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

Tabs can be along with the [NavigationList](#/NavigationList) component.
