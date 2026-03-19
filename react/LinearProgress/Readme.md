### Linear progress

```jsx
import useProgression from 'cozy-ui/transpiled/react/helpers/useProgression'
import Variants from 'cozy-ui/docs/components/Variants'
import LinearProgress from 'cozy-ui/transpiled/react/LinearProgress'

const { progression } = useProgression()

const initialVariants = [
  { withValue: true }
]

;

<Variants initialVariants={initialVariants}>{
  variant => (
    <LinearProgress
      variant={variant.withValue ? "determinate" : undefined}
      value={variant.withValue ? progression : undefined}
    />
  )
}</Variants>
```
