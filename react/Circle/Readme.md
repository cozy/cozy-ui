Displays a simple circle with some text inside of it.

### Default

```jsx
import Circle from 'cozy-ui/transpiled/react/Circle';
<div>
  <Circle>
    Yo
  </Circle>
</div>
```

### Available sizes: xsmall, small, medium (default), large, xlarge

The size can also be specifically defined using a number of pixels.

```jsx
import Circle from 'cozy-ui/transpiled/react/Circle';
<div>
  <div>
    <Circle size="xsmall">Yo</Circle>
  </div>
  <div>
    <Circle size="small">Yo</Circle>
  </div>
  <div>
    <Circle size="medium">Yo</Circle>
  </div>
  <div>
    <Circle size="large">Yo</Circle>
  </div>
  <div>
    <Circle size="xlarge">Yo</Circle>
  </div>
  <hr />
  <div>
    <Circle size={24}>Yo</Circle>
  </div>
</div>
```
