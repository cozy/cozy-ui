#### Filename with extension (ellipsis by default)

```jsx
import Filename from 'cozy-ui/transpiled/react/Filename'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [
  { midEllipsis: false, icon: false, body1Variant: false, extension: true, short: false }
]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
  <Filename
    icon={variant.icon ? FileIcon : undefined}
    variant={variant.body1Variant ? 'body1' : undefined}
    midEllipsis={variant.midEllipsis}
    filename={variant.short ? "Lacinia condimentum this is the end" : "Lacinia condimentum potenti id est tortor dictumst lectus tincidunt hac ultricies, curae mattis nisi neque sodales sagittis dui nulla aliquam turpis eros, finibus ac iaculis dictum et orci elit posuere ex and this is the end"}
    extension={variant.extension ? ".pdf" : undefined}
  />
  )}
</Variants>
```
