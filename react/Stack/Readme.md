A Stack is a simple layout component that is used to vertically pad elements
that it contains.

See [this article](https://every-layout.dev/layouts/stack/) for more information.

The padding is responsive, it is smaller on mobile/tablet.

You can use `xs`, `s`, `m` (default), `l`, `xl`, and `xxl` values for "spacing" to have less/more padding.

```jsx
import Stack from 'cozy-ui/transpiled/react/Stack';
import Card from 'cozy-ui/transpiled/react/Card';
import Typography from 'cozy-ui/transpiled/react/Typography';

initialState = {
  spacing: 'm'
};

const spacings = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

const StateRadio = ({ name, value, ...props }) => {
  return (
    <span className="u-mr-1">
      <input
      style={{ marginRight: '3px' }}
      type='radio'
      name={name}
      checked={state[name] == value}
      onChange={() => setState({ [name]: value })}
      {...props}
    />
      {value}
    </span>
  )
};

<>
  {!isTesting() && (
    <>
      <Typography className="u-mr-1 u-mb-1" variant="body1">Spacing :
        { spacings.map(spacing  => <StateRadio value={spacing} name='spacing' />) }
      </Typography>

      <Stack spacing={state.spacing}>
        <Card><Typography variant='body1'>Homer Simpson</Typography></Card>
        <Card><Typography variant='body1'>Marge Simpson</Typography></Card>
      </Stack>
    </>
  )}

  {isTesting() && (
    <Stack spacing='l'>
      {spacings.map(spacing  => (
        <div key={spacing}>
          <Typography variant='subtitle1' className="u-mb-1">
            {spacing}
          </Typography>
          <Stack spacing={spacing}>
            <Card><Typography variant='body1'>Homer Simpson</Typography></Card>
            <Card><Typography variant='body1'>Marge Simpson</Typography></Card>
          </Stack>
        </div>
      ))}
    </Stack>
  )}
</>
```
