### IconStack

A component to put something in the background and center an
other component on the foreground.

Use IconStack when the resulting combination of icons is considered a single entity.

```
import IconStack from 'cozy-ui/transpiled/react/IconStack';
import Icon from 'cozy-ui/transpiled/react/Icon';
import FileDuotoneIcon from "cozy-ui/transpiled/react/Icons/FileDuotone";
import BankIcon from "cozy-ui/transpiled/react/Icons/Bank";
<IconStack
  background={<Icon icon={FileDuotoneIcon} color="blue"  size={32} />}
  foreground={<Icon icon={BankIcon} color="red" height={16} width={16} />}
/>
```
