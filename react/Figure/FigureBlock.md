Pour montrer une KPI importante.

```jsx
import { FigureBlock } from 'cozy-ui/transpiled/react/Figure'
import ThemeChooser from '../../docs/ThemeChooser'

const Example = () => {
  return (
    <div>
      <FigureBlock
        label='Balance totale'
        total={1000}
        symbol='€'
        coloredPositive coloredNegative signed />

      <FigureBlock
        label='Balance totale (negative number)'
        total={-1000}
        symbol='€'
        coloredPositive coloredNegative signed />

      <FigureBlock
        label='Balance totale (no color)'
        total={-1000}
        symbol='€'
        signed />
    </div>
  )
}

<ThemeChooser>
  <Example />
</ThemeChooser>
```
