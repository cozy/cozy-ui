```
import PercentageLine from 'cozy-ui/transpiled/react/PercentageLine';
import styles from './customization-example.styl';
initialState = { percentage: 0.5 * 100 };

<>
    <button onClick={() => setState({ percentage: Math.random() * 100})}>Random percentage</button>
    {(state.percentage).toFixed(2)}%
    <h2>Original</h2>
    <PercentageLine  color='var(--primaryColor)' value={state.percentage}/>
    <h2>Customized with a class name</h2>
    <PercentageLine color="var(--primaryColor)" value={state.percentage} className={styles.CustomizedPercentageLine} />
</>
```
