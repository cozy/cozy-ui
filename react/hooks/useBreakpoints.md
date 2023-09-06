## useBreakpoints

Used to have access to the current breakpoint based on the window's size.
The component will be refreshed if the window's size changes.

```jsx static
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

const Component = () => {
  const { isMobile } = useBreakpoints()
}
```
