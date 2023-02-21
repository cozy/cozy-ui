Progress indicators express an unspecified wait time or display the length of a process

### Linear and circular progress

```jsx
import useProgression from 'cozy-ui/transpiled/react/helpers/useProgression';
import Variants from 'cozy-ui/docs/components/Variants';
import { LinearProgress, CircularProgress } from 'cozy-ui/transpiled/react/Progress';

const { progression } = useProgression();

const initialVariants = [
  { withValue: true }
];

<Variants initialVariants={initialVariants}>{
   variant => (
      <>
        <LinearProgress
          variant={variant.withValue ? "determinate" : undefined}
          value={variant.withValue ? progression : undefined}
        />
        <br />
        <CircularProgress
          variant={variant.withValue ? "determinate" : undefined}
          value={variant.withValue ? progression : undefined}
        />
      </>
   )
}</Variants>
```
