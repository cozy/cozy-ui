A Stack is a simple layout component that is used to vertically pad elements
that it contains.

See [this article](https://every-layout.dev/layouts/stack/) for more information.

The padding is responsive, it is smaller on mobile/tablet.

```
const Card = require('../Card').default;

<Stack>
  <Card>Homer Simpson</Card>
  <Card>Marge Simpson</Card>
  <Card>Lisa Simpson</Card>
  <Card>Bart Simpson</Card>
  <Card>Maggie Simpson</Card>
</Stack>
```

You can use `xs`, `s`, `l`, `xl`, and `xxl` values for "spacing" to have less/more padding.

```
const Card = require('../Card').default
const spacings = ['xs', 's', 'l', 'xl', 'xxl'];

<div>

{ spacings.map(spacing  =>
  (<>
    <p>
    { spacing }:
    </p>

    <Stack spacing={spacing}>
      <Card>Homer Simpson</Card>
      <Card>Marge Simpson</Card>
    </Stack>
  </>)
  )}

</div>
```
