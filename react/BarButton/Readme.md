# BarButton

This component is used to display a back Button into the Cozy Bar.

### Example

```jsx static
const { BarLeft } = cozy.bar
return (
  <BarLeft>
    <BarButton />
  </BarLeft>
)
```

## `disabled`

```jsx
import BarButton from 'cozy-ui/transpiled/react/BarButton';

<BarButton icon="previous" disabled />
```

## `href`

```jsx
import BarButton from 'cozy-ui/transpiled/react/BarButton';

<BarButton icon="upload" href="http://cozy.io" />
```

## `icon`

```jsx
import BarButton from 'cozy-ui/transpiled/react/BarButton';

<BarButton icon="cube" />
```

## `onClick`

```jsx
import BarButton from 'cozy-ui/transpiled/react/BarButton';

<BarButton icon="gear" onClick={() => alert('BarButton has been clicked')} />
```
