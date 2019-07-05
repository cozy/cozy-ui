```
initialState = { percentage: Math.random() * 100 };

<>
    <button onClick={() => setState({ percentage: Math.random() * 100})}>Random percentage</button>
    <PercentageLine  color='var(--primaryColor)' value={state.percentage}/>
</>
```
