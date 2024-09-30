```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Variants from 'cozy-ui/docs/components/Variants'
import SearchBar from 'cozy-ui/transpiled/react/SearchBar'
import Typography from 'cozy-ui/transpiled/react/Typography'
import CloudIcon from 'cozy-ui/transpiled/react/Icons/Cloud'

const initialVariants = [{ elevation: true, button: false, customIcon: false, disabledClear: false }]

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <>
        <Typography className="u-mb-half">Normal</Typography>
        <SearchBar className="u-mb-2"
          elevation={variant.elevation}
          disabledClear={variant.disabledClear}
          type={variant.button ? "button" : "search"}
          icon={variant.customIcon ? CloudIcon : undefined}
          label={variant.button ? <Typography color="primary">This is a label</Typography> : undefined}
        />
        <Typography className="u-mb-half">Disabled</Typography>
        <SearchBar
          disabled
          elevation={variant.elevation}
          disabledClear={variant.disabledClear}
          type={variant.button ? "button" : "search"}
          icon={variant.customIcon ? CloudIcon : undefined}
          label={variant.button ? <Typography color="primary">This is a label</Typography> : undefined}
        />
      </>
    )}
  </Variants>
</DemoProvider>
```
