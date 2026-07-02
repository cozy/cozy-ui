Re-export of @material-ui. See [the official API](https://v4.mui.com/components/autocomplete/).

```jsx
import Autocomplete from 'cozy-ui/transpiled/react/Autocomplete'
import TextField from 'cozy-ui/transpiled/react/TextField'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

const options = ['one', 'two', 'three']

;
<DemoProvider>
  <Autocomplete
    options={options}
    renderInput={params => <TextField {...params} label="Basic" variant="outlined" />}
  />
  <Autocomplete
    className="u-mt-1"
    options={options}
    size="small"
    renderInput={params => <TextField {...params} label="Basic" variant="outlined" />}
  />
</DemoProvider>
```
