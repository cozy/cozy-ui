### List

```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import ListSkeleton from 'cozy-ui/transpiled/react/Skeletons/ListSkeleton'

const initialVariants = [{ hasSecondary: false, withSubheader: false, divider: false }]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <ListSkeleton
      count={5}
      hasSecondary={variant.hasSecondary}
      withSubheader={variant.withSubheader}
      divider={variant.divider}
    />
  )}
</Variants>
```

### ListItem

```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import ListItemSkeleton from 'cozy-ui/transpiled/react/Skeletons/ListItemSkeleton'

const initialVariants = [{ hasSecondary: false, divider: false }]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <ListItemSkeleton
      hasSecondary={variant.hasSecondary}
      divider={variant.divider}
    />
  )}
</Variants>
```
