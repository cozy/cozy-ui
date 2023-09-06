Used to display a title in the Cozy Bar.

### Usage

```jsx static
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

const MyPage = () => {
  const { isMobile } = useBreakpoints()
  return (
    <BarCenter>
      {isMobile ? <BarTitle>My transactions</BarTitle> : null }
    </BarCenter>
  )
}
```

### Basic usage

The red border is here only to show the area of the bar.

```jsx
<div style={{ border: '1px solid red' }}>
  <BarTitle>My transactions</BarTitle>
</div>
```

### Long title with ellipsis

The red border is here only to show the area of the bar.

```jsx
<div style={{ border: '1px solid red' }}>
  <BarTitle noWrap>{content.ada.short}</BarTitle>
</div>
```
