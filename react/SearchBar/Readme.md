```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Variants from 'cozy-ui/docs/components/Variants'
import SearchBar from 'cozy-ui/transpiled/react/SearchBar'
import Typography from 'cozy-ui/transpiled/react/Typography'

const initialVariants = [{ elevation: true }]

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <>
        <Typography className="u-mb-half">Normal</Typography>
        <SearchBar className="u-mb-2" elevation={variant.elevation} />
        <Typography className="u-mb-half">Disabled</Typography>
        <SearchBar elevation={variant.elevation} disabled />
      </>
    )}
  </Variants>
</DemoProvider>
```
