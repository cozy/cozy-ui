### IconStack

A component to put something in the background and center an
other component on the foreground.

Use IconStack when the resulting combination of icons is considered a single entity.

```jsx
import IconStack from 'cozy-ui/transpiled/react/IconStack'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileDuotoneIcon from "cozy-ui/transpiled/react/Icons/FileDuotone"
import BankIcon from "cozy-ui/transpiled/react/Icons/Bank"

;

<IconStack
  backgroundIcon={
    <Icon
      icon={FileDuotoneIcon}
      color="blue"
      size={32}
    />
  }
  foregroundIcon={
    <Icon
      icon={BankIcon}
      color="red"
      size={16}
    />
  }
  backgroundClassName={'optional-bg-wrapper-class'}
  foregroundClassName={'optional-fg-wrapper-class'}
  offset={{ vertical: '3px' }}
/>
```
