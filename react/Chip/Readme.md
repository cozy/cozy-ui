Chips represent complex entities in small blocks, such as a contact.

```
const ContactChip = ({ contact }) => (
  <Chip style={{ paddingLeft: '0.25rem', marginRight: '0.25rem', marginBottom: '0.25rem' }}>
    <Avatar textId={ contact.name } text={contact.initials} size='small' style={{ marginRight: '0.5rem' }}/> {contact.name}
  </Chip>
);

<div>
  <Chip>
    <Icon icon='file' style={{ marginRight: '0.5rem' }}/> File
  </Chip>{ ' ' } 
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
