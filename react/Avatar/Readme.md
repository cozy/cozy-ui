Show an avatar with initials

### Default

```jsx
import Avatar from 'cozy-ui/transpiled/react/Avatar';
<Avatar />
```

### with initials only

#### with name

```jsx
import Avatar from 'cozy-ui/transpiled/react/Avatar';
<Avatar text="CD" />
```

### with image instead of initials

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar';
<Avatar image={cozyLogo} />
```

### with disabled color

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar';

<div className="u-flex">
  <Avatar disabled />
  <Avatar text="CD" disabled />
  <Avatar image={cozyLogo} disabled />
</div>
```

### Available sizes: xsmall, small, medium (default), large, xlarge

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar';

<div>
  <div className="u-flex">
    <Avatar size="xsmall" />
    <Avatar text="CD" size="xsmall" />
    <Avatar image={cozyLogo} size="xsmall" />
  </div>
  <div className="u-flex">
    <Avatar size="small" />
    <Avatar text="CD" size="small" />
    <Avatar image={cozyLogo} size="small" />
  </div>
  <div className="u-flex">
    <Avatar size="medium" />
    <Avatar text="CD" size="medium" />
    <Avatar image={cozyLogo} size="medium" />
  </div>
  <div className="u-flex">
    <Avatar size="large" />
    <Avatar text="CD" size="large" />
    <Avatar image={cozyLogo} size="large" />
  </div>
  <div className="u-flex">
    <Avatar size="xlarge" />
    <Avatar text="CD" size="xlarge" />
    <Avatar image={cozyLogo} size="xlarge" />
  </div>
</div>
```
