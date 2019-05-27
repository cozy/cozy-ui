Chips represent complex entities in small blocks, such as a contact.

```
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
<Chip.Round>
  <Icon icon='forward'/>
</Chip.Round>
```

### Chip separator

```
<Chip>
  Something
  <Chip.Separator />
  Something else
</Chip>
```

### Chip buttons

```
<div>
  <Chip.Button><Icon icon='forward' /></Chip.Button>
  <Chip.Button disabled><Icon icon='back' /></Chip.Button>
</div>
```

### Specify underlying tag/component

```
<div>
  <Chip component="button" onClick={() => alert('You clicked')}>This is a button</Chip>
  <Chip component="button" disabled>This is a disabled button</Chip>
  <Chip component="span">This is a span</Chip>
</div>
```

### Sizes

```
<div>
  <Chip size="small">This is a small Chip</Chip>
  <Chip size="normal">This is a normal Chip (default)</Chip>
</div>
```

### Variants

```
<div>
  <Chip variant="normal">This is a normal Chip (default)</Chip>
  <Chip variant="outlined">This is an outlined Chip</Chip>
  <Chip variant="dashed">This is a dashed Chip</Chip>
</div>
```
