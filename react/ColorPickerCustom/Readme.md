### ColorPickerCustom

With saturation, hue and hex input for manual input or copy/paste.

```jsx
import { useState } from 'react'

import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Paper from 'cozy-ui/transpiled/react/Paper'
import ColorPickerCustom from 'cozy-ui/transpiled/react/ColorPickerCustom'

;

<DemoProvider>
  <Paper className="u-p-1">
    <ColorPickerCustom
      color={'#AABBCC'}
      onCancel={color => console.info('old color was:', color)}
      onSave={color => console.info('color:', color)}
    />
  </Paper>
</DemoProvider>
```
