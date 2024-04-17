Cozy themed MUI TextField. See [the official API](https://v4.mui.com/api/text-field/) to find the props.

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import TextField, {StyledTextField} from 'cozy-ui/transpiled/react/TextField'
import Variants from 'cozy-ui/docs/components/Variants'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'
import Icon from 'cozy-ui/transpiled/react/Icon'
import InputAdornment from 'cozy-ui/transpiled/react/InputAdornment'
import MenuItem from 'cozy-ui/transpiled/react/MenuItem'

initialState = { option: 'value2' }

const initialVariants = [{
  required: false,
  error: false,
  small: false,
  helperText: false,
  withIcons: false
}]

const inputProps = {
  startAdornment: (
    <InputAdornment position="start">
      <Icon className="u-mr-half" icon={FileIcon} />Ko
    </InputAdornment>
  ),
  endAdornment: (
    <InputAdornment position="end">Ko</InputAdornment>
  ),
}

const options = [
  {
    value: 'value1',
    label: 'Item 1',
  },
  {
    value: 'value2',
    label: 'Item 2',
  },
  {
    value: 'value3',
    label: 'Item 3',
  },
]
const handleChange = (event) => {
  setState({ option: event.target.value })
}

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <>
        <div className="u-mb-1">No label</div>
        <TextField
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          variant="outlined"
        />
        <TextField
          className="u-ml-0-s u-ml-1 u-mt-half-s"
          disabled
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          variant="outlined"
        />

        <div className="u-mb-1 u-mt-2">Empty</div>
        <TextField
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />
        <TextField
          className="u-ml-0-s u-ml-1 u-mt-half-s"
          disabled
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />

        <div className="u-mb-1 u-mt-2">Placeholder</div>
        <TextField
          placeholder="placeholder"
          InputLabelProps={{ shrink: true }}
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />
        <TextField
          className="u-ml-0-s u-ml-1 u-mt-half-s"
          placeholder="placeholder"
          disabled
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />

        <div className="u-mb-1 u-mt-2">Default value</div>
        <TextField
          defaultValue="Default value"
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />
        <TextField
          className="u-ml-0-s u-ml-1 u-mt-half-s"
          defaultValue="Default value"
          disabled
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />

        <div className="u-mb-1 u-mt-2">Multiline</div>
        <TextField
          multiline
          rows={4}
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />
        <TextField
          className="u-ml-0-s u-ml-1 u-mt-half-s"
          multiline
          rows={4}
          disabled
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          InputProps={variant.withIcons ? inputProps : undefined}
          label="Label"
          variant="outlined"
        />

        <div className="u-mb-1 u-mt-2">Select</div>
        <TextField
          select
          options={options}
          value={state.option}
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          label="Label"
          variant="outlined"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="u-ml-1"
          select
          options={options}
          value={state.option}
          disabled
          error={variant.error}
          size={variant.small ? 'small' : 'medium'}
          helperText={variant.helperText ? 'This is an helper text' : undefined}
          required={variant.required}
          label="Label"
          variant="outlined"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </>
    )}
  </Variants>
</DemoProvider>
```
