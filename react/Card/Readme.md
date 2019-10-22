A card is a small block used to separate some content from the rest of the UI.

```
import Card from 'cozy-ui/transpiled/react/Card';
import { Text, SubTitle } from 'cozy-ui/transpiled/react/Text';
import Button from 'cozy-ui/transpiled/react/Button';

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
import Card from 'cozy-ui/transpiled/react/Card';
import { Text, SubTitle } from 'cozy-ui/transpiled/react/Text';

<Card inset>
  <Text>This is some card content. Content can be small or huge. Also, it has margins.</Text>
</Card>
```

#### `tag`

Uses the provided tag to render the root element of the Card

```
import Card from 'cozy-ui/transpiled/react/Card';
import { Text, SubTitle } from 'cozy-ui/transpiled/react/Text';

<Card tag="a" href="https://cozy.io" target="_blank">
  <SubTitle>Visit cozy.io</SubTitle>
  <Text>To learn more about us</Text>
</Card>
```
