A card is a small block used to separate some content from the rest of the UI.

```
const { Text, SubTitle } = require('../Text');

<Card>
  <SubTitle className="u-mb-1">This is a card</SubTitle>
  <Text className="u-mb-1">This is some card content. Content can be small or huge.</Text>
  <Button className="u-ml-0" label="Demo button" />
</Card>
```

### Props

#### `inset`

Renders the Card with increased margins.

```
const { Text, SubTitle } = require('../Text');

<Card inset>
  <Text>This is some card content. Content can be small or huge. Also, it has margins.</Text>
</Card>
```

#### `tag`

Uses the provided tag to render the root element of the Card

```
const { Text, SubTitle } = require('../Text');

<Card tag="a" href="https://cozy.io" target="_blank">
  <SubTitle>Visit cozy.io</SubTitle>
  <Text>To learn more about us</Text>
</Card>
```
