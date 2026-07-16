```jsx
import { useState } from 'react'
import ColorList from 'cozy-ui/transpiled/react/ColorList'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { useBreakpoints } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [{ medium: false }]

const ColorPickerDemo = ({ variant }) => {
  const { isMobile } = useBreakpoints()
  const [selectedColor, setSelectedColor] = useState('')

  return (
    <div style={{ width: (variant.medium || isMobile) ? '100%' : 200 }}>
      <ColorList
        size={variant.medium ? 'medium' : undefined}
        customColorProps={{
          enabled: true,
          onClick: () => {}
        }}
        selectedColor={selectedColor}
        onClick={color => {
          console.info('color :', color)
          setSelectedColor(color)
        }}
      />
    </div>
  )
}

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <ColorPickerDemo variant={variant}/>
    )}
  </Variants>
</DemoProvider>
```
