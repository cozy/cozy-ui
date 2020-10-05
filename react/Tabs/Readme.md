Content needs to be separated into sections and accessed via a single content area using a flat navigation structure that does not refresh the page when selected.

Tabs can have the `inverted` prop to be in the primary color of the app.

### Themed tab for material-ui

```
import { useState } from 'react'
import { Tabs, Tab } from 'cozy-ui/transpiled/react/MuiTabs'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider';
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Example = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, value) => {
    setValue(value)
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <CardDivider />
    </>
  )
};

<BreakpointsProvider>
  <MuiCozyTheme variant='normal'>
    <Example />
  </MuiCozyTheme>
  <br/>
  <MuiCozyTheme variant='inverted'>
    <Example />
  </MuiCozyTheme>
</BreakpointsProvider>
```

### Old tabs

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

ℹ️ Tabs can work along with the [NavigationList](#/NavigationList) component.
