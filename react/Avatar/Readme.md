### Grouped

```jsx

import AvatarGroup, { spacingByAvatarSize } from 'cozy-ui/transpiled/react/AvatarGroup'
import AvatarTwake, { supportedColors } from 'cozy-ui/transpiled/react/Avatar/AvatarTwake'
import Icon from 'cozy-ui/transpiled/react/Icon'
import LinkIcon from "cozy-ui/transpiled/react/Icons/Link"
import cozyLogo from '../../docs/cozy-logo_white_128.png'

const sizes = ['xs', 's', 'm', 'l', 'xl']

;

sizes.map(size => (
  <AvatarGroup className="u-mb-half" key={size} max={5} size={size}>
    <AvatarTwake size={size} color={supportedColors[0]}>AB</AvatarTwake>
    <AvatarTwake size={size} color={supportedColors[1]}>BC</AvatarTwake>
    <AvatarTwake size={size} color={supportedColors[2]}><Icon icon={LinkIcon} /></AvatarTwake>
    <AvatarTwake size={size} src={cozyLogo} />
    <AvatarTwake size={size} color={supportedColors[4]}>EF</AvatarTwake>
    <AvatarTwake size={size} color={supportedColors[5]}>FG</AvatarTwake>
  </AvatarGroup>
))
```

### Mui

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import AvatarTwake, { supportedColors } from 'cozy-ui/transpiled/react/Avatar/AvatarTwake'
import Icon from 'cozy-ui/transpiled/react/Icon'

import LinkIcon from "cozy-ui/transpiled/react/Icons/Link"
import WarningIcon from "cozy-ui/transpiled/react/Icons/Warning"
import Variants from 'cozy-ui/docs/components/Variants'

const sizes = ['xs', 's', 'm', 'l', 'xl']

const initialVariants = [
  { disabled: false },
]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <>
      {supportedColors.map(color => (
        <div key={color} className="u-flex u-flex-items-center u-mb-half" style={{ gap: '0.5rem' }}>
          {sizes.map(size => (
            <React.Fragment key={size}>
              <AvatarTwake size={size} color={color} disabled={variant.disabled} />
              <AvatarTwake size={size} color={color} disabled={variant.disabled}>AB</AvatarTwake>
              <AvatarTwake size={size} color={color} disabled={variant.disabled}><Icon icon={LinkIcon} /></AvatarTwake>
            </React.Fragment>
          ))}
        </div>
      ))}
      <div className="u-flex u-flex-items-center u-mb-half" style={{ gap: '0.5rem' }}>
        {sizes.map(size => (
          <React.Fragment key={size} disabled={variant.disabled}>
            <AvatarTwake size={size} src={cozyLogo} disabled={variant.disabled} />
            <AvatarTwake size={size} disabled={variant.disabled} />
          </React.Fragment>
        ))}
      </div>
    </>
  )}
</Variants>
```

#### Available sizes: xsmall, small, medium (default), large, xlarge

The size can also be specifically defined using a number of pixels.

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import AvatarTwake from 'cozy-ui/transpiled/react/Avatar/AvatarTwake'
import Icon from 'cozy-ui/transpiled/react/Icon'

import LinkIcon from "cozy-ui/transpiled/react/Icons/Link"
import WarningIcon from "cozy-ui/transpiled/react/Icons/Warning"
import palette from 'cozy-ui/transpiled/react/palette'
import Variants from 'cozy-ui/docs/components/Variants'

const getStyle = size => ({
  styleOverlap: {
    marginLeft: size === 'xsmall' ? '-0.5rem' : '-1rem'
  },
  custom: {
    color: 'black', backgroundColor: palette.seafoamGreen
    }
})

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 24]

const initialVariants = [
  { disabled: false, ghost: false, overlap: false },
]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <>
      {sizes.map((size, idx) => (
        <React.Fragment key={size}>
          {idx === sizes.length - 1 && <hr />}
          <div className="u-flex u-mb-half">
            <Avatar size={size} style={variant.overlap ? getStyle(size).styleOverlap : null} disabled={variant.disabled} ghost={variant.ghost} />
            <Avatar size={size} style={variant.overlap ? getStyle(size).styleOverlap : null} text="CD" disabled={variant.disabled} ghost={variant.ghost} />
            <Avatar size={size} style={variant.overlap ? getStyle(size).styleOverlap : null} image={cozyLogo} disabled={variant.disabled} ghost={variant.ghost} />
            <Avatar size={size} style={variant.overlap ? getStyle(size).styleOverlap : null} icon={LinkIcon} disabled={variant.disabled} ghost={variant.ghost} />
            <Avatar size={size} style={variant.overlap ? {...getStyle(size).styleOverlap, ...getStyle().custom} : getStyle().custom} text="CD" disabled={variant.disabled} ghost={variant.ghost} />
            <Avatar size={size} style={variant.overlap ? getStyle(size).styleOverlap : null} icon={<Icon icon={WarningIcon} />} disabled={variant.disabled} ghost={variant.ghost} />
          </div>
        </React.Fragment>
      ))}
    </>
  )}
</Variants>
```
