⚠️  This `Chip` is going to be deprecated, please use [Chips](#/Chips) instead.

Chips represent complex entities in small blocks, such as a contact.

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Avatar from 'cozy-ui/transpiled/react/Avatar';
import FileIcon from "cozy-ui/transpiled/react/Icons/File";
const ContactChip = ({ contact }) => (
  <Chip style={{ paddingLeft: '0.25rem' }}>
    <Avatar textId={ contact.name } text={contact.initials} size='small' style={{ marginRight: '0.5rem' }}/> {contact.name}
  </Chip>
);

<div>
  <Chip>
    <Icon icon={FileIcon} style={{ marginRight: '0.5rem' }}/> File
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

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
import Icon from 'cozy-ui/transpiled/react/Icon';
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";
<Chip.Round>
  <Icon icon={RightIcon}/>
</Chip.Round>
```

### Chip separator

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
<Chip>
  Something
  <Chip.Separator />
  Something else
</Chip>
```

### Chip buttons

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
import Icon from 'cozy-ui/transpiled/react/Icon';
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";
import LeftIcon from "cozy-ui/transpiled/react/Icons/Left";
<div>
  <Chip.Button><Icon icon={RightIcon} /></Chip.Button>
  <Chip.Button disabled><Icon icon={LeftIcon} /></Chip.Button>
</div>
```

### Specify underlying tag/component

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
<div>
  <Chip component="button" onClick={() => alert('You clicked')}>This is a button</Chip>
  <Chip component="button" disabled>This is a disabled button</Chip>
  <Chip component="span">This is a span</Chip>
</div>
```

### Sizes

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
<div>
  <Chip size="tiny">This is a tiny Chip</Chip>
  <Chip size="small">This is a small Chip</Chip>
  <Chip size="normal">This is a normal Chip (default)</Chip>
</div>
```

### Variants

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
<div>
  <Chip variant="normal">This is a normal Chip (default)</Chip>
  <Chip variant="outlined">This is an outlined Chip</Chip>
  <Chip variant="dashed">This is a dashed Chip</Chip>
</div>
```

### Themes

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
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

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
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

```jsx
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';
import Icon from 'cozy-ui/transpiled/react/Icon';
import FileIcon from "cozy-ui/transpiled/react/Icons/File";
import OpenwithIcon from "cozy-ui/transpiled/react/Icons/Openwith";
<Chip
  size="small"
  variant="outlined"
  theme="primary"
  onClick={() => alert('you clicked')}
>
  <Icon icon={FileIcon} size={16} style={{ marginRight: '0.5rem' }} />
  1 invoice
  <Chip.Separator />
  <Icon icon={OpenwithIcon} size={16} />
</Chip>
```
