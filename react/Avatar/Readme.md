Show an avatar with initials

### Default

```
import Avatar from 'cozy-ui/transpiled/react/Avatar';
<Avatar />
```

### with initials only
#### with name

```
import Avatar from 'cozy-ui/transpiled/react/Avatar';
<Avatar text="CD" />
```

### with image instead of initials

```
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar';
<Avatar image={cozyLogo} />
```

### Available sizes: xsmall, small, medium (default), large, xlarge

```
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
