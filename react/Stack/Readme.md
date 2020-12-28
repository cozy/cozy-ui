A Stack is a simple layout component that is used to vertically pad elements
that it contains.

See [this article](https://every-layout.dev/layouts/stack/) for more information.

The padding is responsive, it is smaller on mobile/tablet.

```
import Stack from 'cozy-ui/transpiled/react/Stack';
import Card from 'cozy-ui/transpiled/react/Card';
import Typography from 'cozy-ui/transpiled/react/Typography';

<Stack>
  <Card><Typography variant='body1'>Homer Simpson</Typography></Card>
  <Card><Typography variant='body1'>Marge Simpson</Typography></Card>
  <Card><Typography variant='body1'>Lisa Simpson</Typography></Card>
  <Card><Typography variant='body1'>Bart Simpson</Typography></Card>
  <Card><Typography variant='body1'>Maggie Simpson</Typography></Card>
</Stack>
```

You can use `xs`, `s`, `l`, `xl`, and `xxl` values for "spacing" to have less/more padding.

```
import Stack from 'cozy-ui/transpiled/react/Stack';
import Card from 'cozy-ui/transpiled/react/Card';
import Typography from 'cozy-ui/transpiled/react/Typography';
const spacings = ['xs', 's', 'l', 'xl', 'xxl'];

<Stack spacing='l'>

{ spacings.map(spacing  =>
  (<div key={spacing}>
    <Typography variant='subheading' className='u-mb-1'>
    { spacing }
    </Typography>

    <Stack spacing={spacing}>
      <Card><Typography variant='body1'>Homer Simpson</Typography></Card>
      <Card><Typography variant='body1'>Marge Simpson</Typography></Card>
    </Stack>
  </div>)
  )}

</Stack>
```
