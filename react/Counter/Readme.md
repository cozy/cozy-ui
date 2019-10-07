A simple way to show how many *things* there are.

### Default

```
import Counter from './index';
<div >
  <Counter count={42} />
</div>
```

### Maxed out

Above a certain number, an approximation is displayed. The default treshold is 99.

```
import Counter from './index';
<div >
  <Counter count={14} max={5} />
</div>
```
