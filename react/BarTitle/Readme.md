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

```
<BarTitle>My transactions</BarTitle>
```
