### IconStack

A component to put something in the background and center an
other component on the foreground

```
const IconStack = require('./index').default;
const Icon = require('../Icon').default;
<IconStack
  background={<Icon icon="file-duotone" color="blue"  size={32} />}
  foreground={<Icon icon="bank" color="red" height={16} width={16} />}
/>
```
