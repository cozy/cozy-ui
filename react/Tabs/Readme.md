```jsx
import Tabs from 'cozy-ui/transpiled/react/Tabs'
import Tab from 'cozy-ui/transpiled/react/Tab'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Variants from 'cozy-ui/docs/components/Variants'

initialState = { value: 0 }

const handleChange = (event, value) => {
  setState({ value })
}

const initialVariants = [{ narrowed: false, segmented: false }]

;

<BreakpointsProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={state.value}
        narrowed={variant.narrowed}
        segmented={variant.segmented}
        aria-label="simple tabs example"
        variant={variant.scrollable ? 'scrollable' : undefined}
        onChange={handleChange}
      >
        <Tab label="Item One" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
        <Tab label="Item Two" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
        <Tab label="Item Disabled" id="simple-tab-3" aria-controls="simple-tabpanel-3" disabled />
        <Tab label="Item Three" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
        {variant.scrollable && <Tab label="Item Four" id="simple-tab-4" aria-controls="simple-tabpanel-4" />}
        {variant.scrollable && <Tab label="Item Five" id="simple-tab-5" aria-controls="simple-tabpanel-5" />}
        {variant.scrollable && <Tab label="Item Six" id="simple-tab-6" aria-controls="simple-tabpanel-6" />}
      </Tabs>
    )}
  </Variants>
</BreakpointsProvider>
```

```jsx
import Tabs from 'cozy-ui/transpiled/react/Tabs'
import Tab from 'cozy-ui/transpiled/react/Tab'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Variants from 'cozy-ui/docs/components/Variants'

initialState = { value: 0 }

const handleChange = (event, value) => {
  setState({ value })
}

const initialVariants = [{ standard: true, fullWidth: false, scrollable: false }]


;

<BreakpointsProvider>
  <Variants initialVariants={initialVariants} radio screenshotAllVariants>
    {variant => (
      <>
        <Tabs
          className="u-mb-2"
          indicatorColor="primary"
          textColor="primary"
          value={state.value}
          aria-label="simple tabs example"
          variant={Object.keys(variant).find(key => variant[key])}
          onChange={handleChange}
        >
          <Tab label="Item One" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
          <Tab label="Item Two" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          <Tab label="Item Disabled" id="simple-tab-3" aria-controls="simple-tabpanel-3" disabled />
          <Tab label="Item Three" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
          {variant.scrollable && <Tab label="Item Four" id="simple-tab-4" aria-controls="simple-tabpanel-4" />}
          {variant.scrollable && <Tab label="Item Five" id="simple-tab-5" aria-controls="simple-tabpanel-5" />}
          {variant.scrollable && <Tab label="Item Six" id="simple-tab-6" aria-controls="simple-tabpanel-6" />}
        </Tabs>
        <Tabs
          value={state.value}
          aria-label="simple tabs example"
          segmented
          variant={Object.keys(variant).find(key => variant[key])}
          onChange={handleChange}
        >
          <Tab label="Item One" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
          <Tab label="Item Two" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          <Tab label="Item Disabled" id="simple-tab-3" aria-controls="simple-tabpanel-3" disabled />
          <Tab label="Item Three" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
          {variant.scrollable && <Tab label="Item Four" id="simple-tab-4" aria-controls="simple-tabpanel-4" />}
          {variant.scrollable && <Tab label="Item Five" id="simple-tab-5" aria-controls="simple-tabpanel-5" />}
          {variant.scrollable && <Tab label="Item Six" id="simple-tab-6" aria-controls="simple-tabpanel-6" />}
        </Tabs>
      </>
    )}
  </Variants>
</BreakpointsProvider>
```
