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

You can use `sparse` and `dense` value for "spacing" to have more/less padding.

```
const Card = require('../Card').default;

<div>
<p>
Dense:
</p>
<Stack spacing="dense">
  <Card>Homer Simpson</Card>
  <Card>Marge Simpson</Card>
</Stack>

<p>
Sparse:
</p>

<Stack spacing="sparse">
  <Card>Homer Simpson</Card>
  <Card>Marge Simpson</Card>
</Stack>

</div>
```
