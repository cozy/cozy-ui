### ColorPickerCustom

With saturation, hue and hex input for manual input or copy/paste.

```jsx
import { useState } from 'react'

import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Paper from 'cozy-ui/transpiled/react/Paper';
import ColorPickerCustom from 'cozy-ui/transpiled/react/ColorPickerCustom'

const [color, setColor] = useState('#aabbcc')
;


<BreakpointsProvider>
  <Paper className="u-p-1">
    <ColorPickerCustom color={color} setColor={setColor}/>
  </Paper>
</BreakpointsProvider>

```
