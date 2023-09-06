Content needs to be separated into sections and accessed via a single content area using a flat navigation structure that does not refresh the page when selected.

```jsx
import { useState } from 'react'
import { Tabs, Tab } from 'cozy-ui/transpiled/react/MuiTabs'
import Divider from 'cozy-ui/transpiled/react/Divider';
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'

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
      <Divider />
    </>
  )
};

<BreakpointsProvider>
  <Example />
</BreakpointsProvider>
```

ℹ️ Tabs can work along with the [NavigationList](#/NavigationList) component.
