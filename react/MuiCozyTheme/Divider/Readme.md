A divider can be used when you want to separate the content.

```
import Card from 'cozy-ui/transpiled/react/Card'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider';
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';

<MuiCozyTheme>
  <Card>
    <p>Here is some content in a card.</p>
    <CardDivider className='u-ml-0 u-maw-100' />
    <p>Other content in a card, that is unrelated to the first paragraph.</p>
  </Card>
</MuiCozyTheme>
```
