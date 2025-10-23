Subscribes to a DOM element event while the component is mounted.

```jsx static
import useEventListener from 'cozy-ui/transpiled/react/hooks/useEventListener'

const Component = () => {
  const cb = useCallback(() => {
    alert('Hello world')
  })
  useEventListener(document, 'click', cb)
  return <div></div>
}
```
