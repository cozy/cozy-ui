Displays a simple circle with some text inside of it.

### Default

```jsx
import Avatar from 'cozy-ui/transpiled/react/Avatar'

;

<div>
  <Avatar color="var(--dodgerBlue)" textColor="var(--white)">
    Yo
  </Avatar>
</div>
```

### Available sizes: xsmall, small, medium (default), large, xlarge

The size can also be specifically defined using a number of pixels.

```jsx
import Avatar from 'cozy-ui/transpiled/react/Avatar'

;

<div>
  <div>
    <Avatar color="var(--dodgerBlue)" textColor="var(--white)" size="xs">Yo</Avatar>
  </div>
  <div>
    <Avatar color="var(--dodgerBlue)" textColor="var(--white)" size="s">Yo</Avatar>
  </div>
  <div>
    <Avatar color="var(--dodgerBlue)" textColor="var(--white)" size="m">Yo</Avatar>
  </div>
  <div>
    <Avatar color="var(--dodgerBlue)" textColor="var(--white)" size="l">Yo</Avatar>
  </div>
  <div>
    <Avatar color="var(--dodgerBlue)" textColor="var(--white)" size="xl">Yo</Avatar>
  </div>
  <hr />
  <div>
    <Avatar color="var(--dodgerBlue)" textColor="var(--white)" size={24}>Yo</Avatar>
  </div>
</div>
```
