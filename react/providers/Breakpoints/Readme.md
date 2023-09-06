You can use the `useBreakpoints` hook to know whether
the window has a mobile or desktop width.

A `BreakpointsProvider` must be used above the component using the
`useBreakpoints` hook to provide it with the breakpoints' context.

When resizing the window, the components using `useBreakpoints` will
automatically update. Components below `BreakpointsProvider` but not
using `useBreakpoints` will not re-render (you can resize the window
with the inspector open to see that "render wrapper div" messages appear
only once).

The difference with media-queries is that you can use useBreakpoints to
completely change the content, the layout, or prune away complete
subtrees (useful on mobile where space is at a premium). Here for
example, the square contents changes on desktop or mobile.

```jsx
import useBreakpoints, { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'

const styles = {
  responsiveDiv: {
    color: 'white',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem 0.5rem'
  }
}

const ResponsiveDiv = () => {
    const { isMobile } = useBreakpoints()
    return <div style={{
        ...styles.responsiveDiv,
        background: isMobile ? 'crimson' : 'royalblue',
        width: isMobile ? 100 : 200,
        height: isMobile ? 100 : 200
    }}>
      { isMobile ? 'mobile' : 'desktop' }
    </div>
};

const LoggingWrapper = ({ children, n }) => {
  console.log('render wrapper div', n)
  return children
}

<BreakpointsProvider>
  <LoggingWrapper n={1}>
    <LoggingWrapper n={2}>
      <ResponsiveDiv />
    </LoggingWrapper>
  </LoggingWrapper>
  <LoggingWrapper n={3}>
    <LoggingWrapper n={4}>
      <LoggingWrapper n={5}>
        <ResponsiveDiv />
      </LoggingWrapper>
    </LoggingWrapper>
  </LoggingWrapper>
</BreakpointsProvider>
```
