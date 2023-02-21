Empty (or error) view in a listing container

```jsx
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Button from 'cozy-ui/transpiled/react/Button'
import Empty from 'cozy-ui/transpiled/react/Empty'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [
  { large: false, medium: false, withContent: false }
]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <Empty
      icon={CozyIcon}
      iconSize={variant.large ? 'large' : variant.medium ? 'medium' : 'normal'}
      title="This list is empty"
      text="Try adding some content to this list"
    >
      {variant.withContent && <Button className='u-mt-1' label="Try refreshing" />}
    </Empty>
  )}
</Variants>
```
