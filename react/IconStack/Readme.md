### IconStack

A component to put something in the background and center an
other component on the foreground.

Use IconStack when the resulting combination of icons is considered a single entity.

```
import IconStack from 'cozy-ui/transpiled/react/IconStack';
import Icon from 'cozy-ui/transpiled/react/Icon';
<IconStack
  background={<Icon icon="file-duotone" color="blue"  size={32} />}
  foreground={<Icon icon="bank" color="red" height={16} width={16} />}
/>
```
