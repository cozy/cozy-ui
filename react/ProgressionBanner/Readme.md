A banner with a progress bar at the bottom.

```jsx
import useProgression from 'cozy-ui/transpiled/react/helpers/useProgression';
import ProgressionBanner from 'cozy-ui/transpiled/react/ProgressionBanner';
import Icon from 'cozy-ui/transpiled/react/Icon';
import CloudSync from 'cozy-ui/transpiled/react/Icons/CloudSync';
import Variants from 'cozy-ui/docs/components/Variants';
import MuiButton from 'cozy-ui/transpiled/react/Button';

const { progression } = useProgression();

const initialVariants = [
  { withValue: true, progressBar: true, withButton: false }
];

<Variants initialVariants={initialVariants}>{
  variant => (
    <ProgressionBanner
      progressBar={variant.progressBar}
      value={variant.withValue && progression}
      text={variant.withButton ? "Storage limit nearly reached" : "4 remaining items"}
      icon={<Icon icon={CloudSync} />}
      button={variant.withButton && <MuiButton color='primary' onClick={() => alert("Clicked!")}>
          Manage your storage space
        </MuiButton>}
    />
  )
}</Variants>
```
