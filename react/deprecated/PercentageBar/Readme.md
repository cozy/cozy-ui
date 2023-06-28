```jsx
import PercentageBar from 'cozy-ui/transpiled/react/deprecated/PercentageBar';
initialState = { percentage: 0.5 * 100 };

<>
    <button onClick={() => setState({ percentage: Math.random() * 100})}>Random percentage</button>
    {(state.percentage).toFixed(2)}%
    <PercentageBar
      color="var(--primaryColor)"
      value={state.percentage}
      style={{ marginBottom: '2rem' }}
    />
    <PercentageBar
      color="var(--emerald)"
      value={state.percentage}
    />
</>
```
