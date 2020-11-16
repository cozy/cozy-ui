A banner with a progress bar at the bottom.

```jsx
import useProgression from 'cozy-ui/transpiled/react/helpers/useProgression'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import ProgressionBanner from 'cozy-ui/transpiled/react/ProgressionBanner'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Button from 'cozy-ui/transpiled/react/Button'
import CloudSync from 'cozy-ui/transpiled/react/Icons/CloudSync'
import Variants from 'docs/components/Variants'

const { progression } = useProgression()

const initialVariants = [
  { withValue: true, progressBar: true, withButton: false }
];

<Variants initialVariants={initialVariants}>{
  variant => (
    <MuiCozyTheme>
      <ProgressionBanner
        progressBar={variant.progressBar}
        value={variant.withValue && progression}
        text={variant.withButton ? "Storage limit nearly reached" : "4 remaining items"}
        icon={<Icon icon={CloudSync} />}
        button={variant.withButton && <Button
            theme="text"
            label="Manage your storage space"
            onClick={() => alert("Clicked!")}
          />}
      />
    </MuiCozyTheme>
  )
}</Variants>
```
