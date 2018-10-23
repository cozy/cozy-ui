A little inset with text and optional icon that can be used to provide some contextual information.

### Default

```
<div >
  <ContextHeader title="Pick a book" text="What will you read today?" />
</div>
```

### With an icon

```
<div >
  <ContextHeader title="Pick a book" text="What will you read today?" illustration={<Icon icon="album" size={32} />} />
</div>
```

### With a closing action

```
<div >
  <ContextHeader title="Pick a book" text="What will you read today?" illustration={<Icon icon="album" size={32} />} onClose={() => alert('Nothing then.')} />
</div>
```
