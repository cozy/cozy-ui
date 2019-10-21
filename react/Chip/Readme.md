Chips represent complex entities in small blocks, such as a contact.

```
import Chip from './index';
import Icon from '../Icon';
import Avatar from '../Avatar';
const ContactChip = ({ contact }) => (
  <Chip style={{ paddingLeft: '0.25rem' }}>
    <Avatar textId={ contact.name } text={contact.initials} size='small' style={{ marginRight: '0.5rem' }}/> {contact.name}
  </Chip>
);

<div>
  <Chip>
    <Icon icon='file' style={{ marginRight: '0.5rem' }}/> File
  </Chip><br/>
  <ContactChip contact={{ initials: 'AL',  name: 'Ada Lovelace'}} />
  <ContactChip contact={{ initials: 'CB',  name: 'Charles Babbage'}} />
  <ContactChip contact={{ initials: 'GH',  name: 'Grace Hopper'}} />
  <ContactChip contact={{ initials: 'JM',  name: 'John McCarthy'}} />
  <ContactChip contact={{ initials: 'DK',  name: 'Donald Knuth'}} />
  <ContactChip contact={{ initials: 'BL',  name: 'Barbara Liskov'}} />
</div>
```

### Round chip

```
import Chip from './index';
import Icon from '../Icon';
<Chip.Round>
  <Icon icon='right'/>
</Chip.Round>
```

### Chip separator

```
import Chip from './index';
<Chip>
  Something
  <Chip.Separator />
  Something else
</Chip>
```

### Chip buttons

```
import Chip from './index';
import Icon from '../Icon';
<div>
  <Chip.Button><Icon icon='right' /></Chip.Button>
  <Chip.Button disabled><Icon icon='left' /></Chip.Button>
</div>
```

### Specify underlying tag/component

```
import Chip from './index';
<div>
  <Chip component="button" onClick={() => alert('You clicked')}>This is a button</Chip>
  <Chip component="button" disabled>This is a disabled button</Chip>
  <Chip component="span">This is a span</Chip>
</div>
```

### Sizes

```
import Chip from './index';
<div>
  <Chip size="tiny">This is a tiny Chip</Chip>
  <Chip size="small">This is a small Chip</Chip>
  <Chip size="normal">This is a normal Chip (default)</Chip>
</div>
```

### Variants

```
import Chip from './index';
<div>
  <Chip variant="normal">This is a normal Chip (default)</Chip>
  <Chip variant="outlined">This is an outlined Chip</Chip>
  <Chip variant="dashed">This is a dashed Chip</Chip>
</div>
```

### Themes

```
import Chip from './index';
<div>
  <div>
    <Chip theme="normal">This is a normal Chip (default)</Chip>
    <Chip theme="primary">This is a primary Chip</Chip>
    <Chip theme="error">This is an error Chip</Chip>
  </div>
  <div>
    <Chip theme="normal" variant="outlined">This is a normal Chip (default)</Chip>
    <Chip theme="primary" variant="outlined">This is a primary Chip</Chip>
    <Chip theme="error" variant="outlined">This is an error Chip</Chip>
  </div>
  <div>
    <Chip theme="normal" variant="dashed">This is a normal Chip (default)</Chip>
    <Chip theme="primary" variant="dashed">This is a primary Chip</Chip>
    <Chip theme="error" variant="dashed">This is an error Chip</Chip>
  </div>
</div>
```

### Mix sizes, variants and themes

```
import Chip from './index';
<div>
  <div>
    <Chip theme="normal" size="small">This is a normal Chip</Chip>
    <Chip theme="primary" size="small">This is a primary Chip</Chip>
    <Chip theme="error" size="small">This is an error Chip</Chip>
  </div>
  <div>
    <Chip theme="normal" variant="outlined" size="small">This is a normal Chip</Chip>
    <Chip theme="primary" variant="outlined" size="small">This is a primary Chip</Chip>
    <Chip theme="error" variant="outlined" size="small">This is an error Chip</Chip>
  </div>
  <div>
    <Chip theme="normal" variant="dashed" size="small">This is a normal Chip</Chip>
    <Chip theme="primary" variant="dashed" size="small">This is a primary Chip</Chip>
    <Chip theme="error" variant="dashed" size="small">This is an error Chip</Chip>
  </div>
</div>
```

### Complete example

```
import Chip from './index';
import Icon from '../Icon';
<Chip
  size="small"
  variant="outlined"
  theme="primary"
  onClick={() => alert('you clicked')}
>
  <Icon icon="file" size={16} style={{ marginRight: '0.5rem' }} />
  1 invoice
  <Chip.Separator />
  <Icon icon="openwith" size={16} />
</Chip>
```
