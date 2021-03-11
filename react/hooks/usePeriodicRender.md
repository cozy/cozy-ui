Used to render a component periodically. 

```jsx
import usePeriodicRender from 'cozy-ui/transpiled/react/hooks/usePeriodicRender'

const Component = () => {
  usePeriodicRender(1000)
  return <div>
    <p>
      I am refreshing every second !<br />
      Proof: { (new Date()).toString() }
    </p>
  </div>
}

<>{ isTesting() ? <div>Deactivated for tests</div> : <Component /> }</>
```
