A simple way to show how many _things_ there are.

### Default

```jsx
import Counter from 'cozy-ui/transpiled/react/Counter';
<div >
  <Counter count={42} />
</div>
```

### Maxed out

Above a certain number, an approximation is displayed. The default treshold is 99.

```jsx
import Counter from 'cozy-ui/transpiled/react/Counter';
<div >
  <Counter count={14} max={5} />
</div>
```
