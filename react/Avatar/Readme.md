### Default, with specific icon, with initials, with image, with specific style

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar';
import Icon from 'cozy-ui/transpiled/react/Icon'; 

<div className="u-flex">
  <Avatar />
  <Avatar text="CD" />
  <Avatar image={cozyLogo} />
  <Avatar icon="link" />
  <Avatar text="CD" style={{color: 'black', backgroundColor: 'var(--seafoamGreen)' }} />
  <Avatar icon={<Icon icon='warning' />} />
</div>
```

### With disabled color

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar';

<div className="u-flex">
  <Avatar disabled />
  <Avatar text="CD" disabled />
  <Avatar image={cozyLogo} disabled />
  <Avatar icon="link" disabled />
  <Avatar text="CD" disabled style={{color: 'black', backgroundColor: 'var(--seafoamGreen)' }} />
</div>
```

### With overlap

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
const style={
  marginLeft: '-1rem'
};

<div className="u-flex">
  <Avatar style={style} />
  <Avatar text="CD" style={style} />
  <Avatar image={cozyLogo} style={style} />
  <Avatar icon="link" style={style} />
  <Avatar disabled style={style} />
  <Avatar text="CD" disabled style={style} />
  <Avatar image={cozyLogo} disabled style={style} />
  <Avatar icon="link" disabled style={style}/>
</div>
```

### Available sizes: xsmall, small, medium (default), large, xlarge

The size can also be specifically defined using a number of pixels.

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Avatar from 'cozy-ui/transpiled/react/Avatar';

<div>
  <div className="u-flex">
    <Avatar size="xsmall" />
    <Avatar text="CD" size="xsmall" />
    <Avatar image={cozyLogo} size="xsmall" />
    <Avatar icon="link" size="xsmall" />
  </div>
  <div className="u-flex">
    <Avatar size="small" />
    <Avatar text="CD" size="small" />
    <Avatar image={cozyLogo} size="small" />
    <Avatar icon="link" size="small" />
  </div>
  <div className="u-flex">
    <Avatar size="medium" />
    <Avatar text="CD" size="medium" />
    <Avatar image={cozyLogo} size="medium" />
    <Avatar icon="link" size="medium" />
  </div>
  <div className="u-flex">
    <Avatar size="large" />
    <Avatar text="CD" size="large" />
    <Avatar image={cozyLogo} size="large" />
    <Avatar icon="link" size="large" />
  </div>
  <div className="u-flex">
    <Avatar size="xlarge" />
    <Avatar text="CD" size="xlarge" />
    <Avatar image={cozyLogo} size="xlarge" />
    <Avatar icon="link" size="xlarge" />
  </div>
  <hr />
  <div className="u-flex">
    <Avatar size={24} />
    <Avatar text="CD" size={24} />
    <Avatar image={cozyLogo} size={24} />
    <Avatar icon="link" size={24} />
  </div>
</div>
```
