### Radio

```jsx
import Radio from 'cozy-ui/transpiled/react/deprecated/Radio'
import Variants from 'cozy-ui/docs/components/Variants'

let initialVariants = [
  { error: false, disabled: false }
]

if (isTesting()) {
  initialVariants = [
    ...initialVariants,
    { error: true, disabled: false },
    { error: false, disabled: true }
  ]
}

<Variants initialVariants={initialVariants}>{
  variant => (
    <form>
      <div>
        <Radio
          name="radioForm"
          value="radioValue1"
          label="This is a radio button"
          error={variant.error}
          disabled={variant.disabled}
        />
        <Radio
          name="radioForm"
          value="radioValue2"
          label="This is also a radio button"
          error={variant.error}
          disabled={variant.disabled}
        />
        <Radio
          style={{ background: 'cadetblue',  padding: '0.5rem', height: '3rem' }}
          name="radioForm"
          value="radioValue3"
          label="This is a radio button with a custom style"
          error={variant.error}
          disabled={variant.disabled}
        />
      </div>
    </form>
  )
}</Variants>
```

### No gutter

By default Radio and Checkbox have a small gutter next to them for their label not to be touching
the edge of the radio/checkbox. This can be cumbersome when aligning horizontally inside a container.
You can set `gutter` to `false` to cancel the default gutter.

```jsx
import Radio from 'cozy-ui/transpiled/react/deprecated/Radio'
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'

const Box = ({ children }) => {
  return   <div style={{ height: '3rem', width: '3rem', border: '2px dashed #CCC', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    { children }
  </div>
}

const bboxStyle = { border: '1px solid red' }

initialState.bbox = isTesting()

;

<>
  <p>
    <Checkbox checked={state.bbox} onClick={() => setState({ bbox: !state.bbox })} label="View bounding box" />
  </p>
  <p>Default gutter</p>
  <Box>
    <Radio checked style={state.bbox ? bboxStyle : null} readOnly />
  </Box>
  <p>Gutter set to false</p>
  <Box>
    <Radio gutter={false} checked style={state.bbox ? bboxStyle : null} readOnly />
  </Box>
</>
```

### In a RadioGroup

```jsx
import { useCallback, useMemo, useState } from 'react'

import Radio from 'cozy-ui/transpiled/react/deprecated/Radio'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import uniqueId from 'lodash/uniqueId'

const radioGroupId = uniqueId('radioGroup')

const [radioValue, setRadioValue] = useState('item1')

const onChange = event => {
  setRadioValue(event.target.value)
}

<RadioGroup
  name={radioGroupId}
  value={radioValue.toString()}
  onChange={onChange}
>
  <FormControlLabel
    value="item1"
    control={<Radio />}
    label="Item 1"
  />
  <FormControlLabel
    value="item2"
    control={<Radio />}
    label="Item 2"
  />
  <FormControlLabel
    value="item3"
    control={<Radio />}
    label="Item 3"
  />
</RadioGroup>
```
