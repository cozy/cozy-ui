### Circular progress

```jsx
import useProgression from 'cozy-ui/transpiled/react/helpers/useProgression'
import Variants from 'cozy-ui/docs/components/Variants'
import CircularProgress from 'cozy-ui/transpiled/react/CircularProgress'

const { progression } = useProgression()

const initialVariants = [
  { withValue: true }
]

;

<Variants initialVariants={initialVariants}>{
  variant => (
    <CircularProgress
      variant={variant.withValue ? "determinate" : undefined}
      value={variant.withValue ? progression : undefined}
    />
  )
}</Variants>
```
