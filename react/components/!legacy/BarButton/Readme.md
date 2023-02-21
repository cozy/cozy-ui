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
import PreviousIcon from 'cozy-ui/transpiled/react/Icons/Previous';

<BarButton icon={PreviousIcon} disabled />
```

## `href`

```jsx
import BarButton from 'cozy-ui/transpiled/react/BarButton';
import UploadIcon from 'cozy-ui/transpiled/react/Icons/Upload';

<BarButton icon={UploadIcon} href="http://cozy.io" />
```

## `icon`

```jsx
import BarButton from 'cozy-ui/transpiled/react/BarButton';
import CubeIcon from 'cozy-ui/transpiled/react/Icons/Cube';

<BarButton icon={CubeIcon} />
```

## `onClick`

```jsx
import BarButton from 'cozy-ui/transpiled/react/BarButton';
import GearIcon from 'cozy-ui/transpiled/react/Icons/Gear';

<BarButton icon={GearIcon} onClick={() => alert('BarButton has been clicked')} />
```
