```jsx
import ThresholdBar from 'cozy-ui/transpiled/react/ThresholdBar'

function ThresholdBarExample(props) {
  return (
    <>
      val: {props.value}, threshold: {props.threshold}
      <ThresholdBar {...props} />
    </>
  )
}

initialState.value = 25
const handleChange = ev => setState({ value: ev.target.value });

<>
  <ThresholdBarExample threshold={100} value={50} />
  <br />
  <ThresholdBarExample threshold={100} value={25} />
  <br />
  <ThresholdBarExample threshold={100} value={50} />
  <br />
  <ThresholdBarExample threshold={100} value={200} />
  <br />
  <ThresholdBarExample threshold={100} value={120} />
  <br />
  <input type='range' defaultValue={ 0 } step={1} min={0} max={200} onChange={handleChange}/>
  <ThresholdBarExample threshold={100} value={state.value} />
  <br />
</>
```
