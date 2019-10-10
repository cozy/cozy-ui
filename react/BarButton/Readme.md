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
<BarButton icon="previous" disabled />
```

## `href`

```jsx
<BarButton icon="upload" href="http://cozy.io" />
```

## `icon`

```jsx
<BarButton icon="cube" />
```

## `onClick`

```jsx
<BarButton icon="gear" onClick={() => alert('BarButton has been clicked')} />
```
