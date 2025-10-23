#### Load More

The Load More component can be used at the bottom of infinite lists where it will automatically start loading the next batch of data when it scrolls into view.

```jsx
import LoadMore from 'cozy-ui/transpiled/react/LoadMore';

initialState = { elements: [1, 2] };
const sleep = (timeout) => new Promise(resolve => setTimeout(resolve, timeout))
const fetchMore = async () => {
  await sleep(1000);
  setState(state => ({ elements: [...state.elements, state.elements.length + 1]}));
}

<div style={{ height: '300px', overflow: 'auto' }}>
  <p>
    Scroll down to load more.
  </p>

  {state.elements.map((el, index) => (
      <div style={{ background: 'grey', height: '160px', marginBottom: '10px' }} key={index} />
  ))}

  { state.elements.length < 25 && <LoadMore label="Load more" fetchMore={fetchMore} /> }
</div>
```

If for some reason the loading doesn't happen automatically, the component displays a button that can be used to manually load the next batch of data.
This next example loads nothing, it's just there to show what the button looks like.

```jsx
import LoadMore from 'cozy-ui/transpiled/react/LoadMore';

<div>
  <LoadMore label="Load more" fetchMore={() => {}} />
</div>
```
