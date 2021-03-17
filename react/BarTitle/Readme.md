Used to display a title in the Cozy Bar.

### Usage

```jsx static
import { useBreakpoints } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

const MyPage = () => {
  const { isMobile } = useBreakpoints()
  return (
    <BarCenter>
      {isMobile ? <BarTitle>My transactions</BarTitle> : null }
    </BarCenter>
  )
}
```

### Display

The border is here to show the area of the bar.

```
<div style={{ height: '3rem', border: '1px solid var(--dividerColor) ' }}>
  <BarTitle>My transactions</BarTitle>
</div>
```
