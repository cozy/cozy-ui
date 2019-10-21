Show an avatar with initials

### Default

```
import Avatar from './index';
<Avatar />
```

### with initials only
#### with name

```
import Avatar from './index';
<Avatar text="CD" />
```

### with image instead of initials

```
import Avatar from './index';
<Avatar image="https://cozy.io/fr/images/cozy-logo_white.png" />
```

### Available sizes: xsmall, small, medium (default), large, xlarge
```
import Avatar from './index';
<div>
  <div className="u-flex">
    <Avatar size="xsmall" />
    <Avatar text="CD" size="xsmall" />
    <Avatar image="https://cozy.io/fr/images/cozy-logo_white.png" size="xsmall" />
  </div>
  <div className="u-flex">
    <Avatar size="small" />
    <Avatar text="CD" size="small" />
    <Avatar image="https://cozy.io/fr/images/cozy-logo_white.png" size="small" />
  </div>
  <div className="u-flex">
    <Avatar size="medium" />
    <Avatar text="CD" size="medium" />
    <Avatar image="https://cozy.io/fr/images/cozy-logo_white.png" size="medium" />
  </div>
  <div className="u-flex">
    <Avatar size="large" />
    <Avatar text="CD" size="large" />
    <Avatar image="https://cozy.io/fr/images/cozy-logo_white.png" size="large" />
  </div>
  <div className="u-flex">
    <Avatar size="xlarge" />
    <Avatar text="CD" size="xlarge" />
    <Avatar image="https://cozy.io/fr/images/cozy-logo_white.png" size="xlarge" />
  </div>
</div>
```
