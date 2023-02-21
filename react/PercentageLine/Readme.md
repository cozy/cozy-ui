```jsx
import PercentageLine from 'cozy-ui/transpiled/react/PercentageLine';
initialState = { percentage: 0.5 * 100 };

<>
    <button onClick={() => setState({ percentage: Math.random() * 100})}>Random percentage</button>
    {(state.percentage).toFixed(2)}% <PercentageLine  color='var(--primaryColor)' value={state.percentage}/>
</>
```
