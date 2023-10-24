Empty (or error) view

```jsx
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Empty from 'cozy-ui/transpiled/react/Empty'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [
  { large: false, medium: false, withContent: false, longTitle: false, longText: false, centered: false }
]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <div className="u-db-s u-flex" style={{ height: 500, transform: 'scale(1)' }}>
      <Empty
        icon={CozyIcon}
        iconSize={variant.large ? 'large' : variant.medium ? 'medium' : 'normal'}
        title={variant.longTitle ? "This is a very very long title, just to see and verify how it works with it" : "This list is empty"}
        text={variant.longText ? content.ada.short : "Try adding some content to this list"}
        centered={variant.centered}
      >
        {variant.withContent && <Button className='u-mt-1' label="Try refreshing" />}
      </Empty>
    </div>
  )}
</Variants>
```
