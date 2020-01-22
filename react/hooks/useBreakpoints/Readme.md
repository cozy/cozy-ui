```
import useBreakpoints, { BreakpointsProvider } from '.'

const ResponsiveDiv = () => {
    const { isMobile } = useBreakpoints()
    return <div>
      { isMobile ? 'mobile layout' : 'desktop layout' }
    </div>
};

<BreakpointsProvider>
  <ResponsiveDiv />
</BreakpointsProvider>
```
