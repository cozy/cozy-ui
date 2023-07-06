`<Badge />` component wraps the element you want to apply a badge to. It is based on the [Badge component from Material-UI](https://v4.mui.com/api/badge/).

### Basic Badges

The default version of badges is used to indicate an amount of new things that the user should see. This could be a number of new messages in an inbox or the number of new files in a folder.

The `dot` variant can be used to indicate that the item _itself_ is new. A `dot` badge on a folder for example indicates that the folder is new, not that it contains new elements.

```jsx
import Badge from 'cozy-ui/transpiled/react/Badge'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Variants from 'cozy-ui/docs/components/Variants'
import CircleFilledIcon from "cozy-ui/transpiled/react/Icons/CircleFilled"

const initialVariants = [
  { overlap: true, error: false, dot: false, withBorder: false, left: false, bottom: false, small: false, large: false }
]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <Badge
      className="u-m-half"
      badgeContent={4}
      color={
        variant.error ? "error" : variant.secondaryColor ? "secondary" : "primary"
      }
      variant={variant.dot ? "dot" : "standard"}
      size={variant.large ? "large" : variant.small ? "small" : "medium"}
      anchorOrigin={{
        vertical: variant.bottom ? "bottom" : "top",
        horizontal: variant.left ? "left" : "right",
      }}
      withBorder={variant.withBorder}
      overlap={variant.overlap ? "circular" : "rectangular"}
    >
      <Icon
        icon={CircleFilledIcon}
        size={variant.large ? "32" : variant.small ? "16" : "24"}
        color="var(--slateGrey)"
      />
    </Badge>
  )}
</Variants>
```

### Double badges

Badges can be combined — in this example, we have an item with a new qualification.

```jsx
import Badge from 'cozy-ui/transpiled/react/Badge'
import InfosBadge from 'cozy-ui/transpiled/react/InfosBadge'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import LinkIcon from "cozy-ui/transpiled/react/Icons/Link"

;

<InfosBadge
  badgeContent={
    <Badge color="error" variant="dot" size="small">
      <Icon icon={LinkIcon} size="10" />
    </Badge>
  }
>
  <Avatar text="CD" size="small" />
</InfosBadge>
```
