### Radios

```jsx
import Radio from 'cozy-ui/transpiled/react/Radios'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import Variants from 'cozy-ui/docs/components/Variants'
const Box = ({ children }) => {
  return <div style={{ height: '3rem', width: '3rem', border: '2px dashed #CCC', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    { children }
  </div>
}

initialState = { radioValue: 'item1' }

const initialVariants = [
  { checked: false, disabled: false, secondary: false }
]

const handleChange = event => {
  setState({ radioValue: event.target.value  })
}

const bboxStyle = { border: '1px solid red' }

;

<>
  <RadioGroup
    aria-label="radio"
    name="radioName"
    value={state.radioValue.toString()}
    onChange={handleChange}
  >
    <FormControlLabel
      value="item1"
      label="This is a radio button"
      control={
        <Radio />
      }
    />
    <FormControlLabel
      value="item2"
      label="This is an intent radio button"
      control={
        <Radio color="secondary" />
      }
    />
    <FormControlLabel
      value="item3"
      label="This is a disabled radio button"
      control={
        <Radio disabled />
      }
    />
    <FormControlLabel
      value="item4"
      label="This is a checked disabled radio button"
      control={
        <Radio checked disabled />
      }
    />
    <FormControlLabel
      value="item5"
      label="This is a edge start radio button"
      control={
        <Radio edge="start" />
      }
    />
    <FormControlLabel
      value="item6"
      label="This is a edge end radio button"
      control={
        <Radio edge="end" />
      }
    />
  </RadioGroup>

  {isTesting() && (
    <Variants initialVariants={initialVariants} screenshotAllVariants>
      {variant => (
        <Radio
          color={variant.secondary ? 'secondary' : 'primary'}
          checked={variant.checked}
          disabled={variant.disabled}
        />
      )}
    </Variants>
  )}
</>
```

### Radios position

By default Radio are centered. It's possible to move the radio inside a container with `edge` property.

```jsx
import Radio from 'cozy-ui/transpiled/react/Radios'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import Variants from 'cozy-ui/docs/components/Variants'
const Box = ({ children }) => {
  return <div style={{ height: '3rem', width: '3rem', border: '2px dashed #CCC', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    { children }
  </div>
}

initialState = { radioValue: 'item1' }

const initialVariants = [
  { checked: false, disabled: false, secondary: false }
]

const handleChange = event => {
  setState({ radioValue: event.target.value  })
}

const bboxStyle = { border: '1px solid red' }

;

<>
  <Box>
    <Radio edge={false} style={bboxStyle} />
  </Box>
  <Box>
    <Radio edge="start" style={bboxStyle} />
  </Box>
  <Box>
    <Radio edge="end" style={bboxStyle} />
  </Box>
</>
```
