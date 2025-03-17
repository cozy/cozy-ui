### Grouped

```jsx

import AvatarGroup, { spacingByAvatarSize } from 'cozy-ui/transpiled/react/AvatarGroup'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import { supportedColors } from 'cozy-ui/transpiled/react/Avatar/helpers'
import Icon from 'cozy-ui/transpiled/react/Icon'
import LinkIcon from "cozy-ui/transpiled/react/Icons/Link"
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import Variants from 'cozy-ui/docs/components/Variants'

const sizes = ['xs', 's', 'm', 'l', 'xl']
const initialVariants = [{ disabled: false }]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    sizes.map(size => (
      <div className="u-mb-half u-flex u-flex-items-center" key={size}>
        <AvatarGroup style={{ zIndex: 2 }} max={4} size={size}>
          <Avatar size={size} color={supportedColors[0]} disabled={variant.disabled}>AB</Avatar>
          <Avatar size={size} color={supportedColors[1]} disabled={variant.disabled}>BC</Avatar>
          <Avatar size={size} src={cozyLogo} disabled={variant.disabled} />
          <Avatar size={size} color={supportedColors[4]} disabled={variant.disabled}>EF</Avatar>
          <Avatar size={size} color={supportedColors[5]} disabled={variant.disabled}>FG</Avatar>
        </AvatarGroup>
        <Avatar
          style={{ marginLeft: `-${spacingByAvatarSize[size]}px`, zIndex: 1 }}
          size={size} color={supportedColors[2]}
          color="none"
          border
          innerBorder
          disabled={variant.disabled}
        >
          <Icon icon={LinkIcon} />
        </Avatar>
      </div>
    ))
  )}
</Variants>
```

### Solo

```jsx
import cozyLogo from '../../docs/cozy-logo_white_128.png'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import { supportedColors } from 'cozy-ui/transpiled/react/Avatar/helpers'
import Icon from 'cozy-ui/transpiled/react/Icon'

import LinkIcon from "cozy-ui/transpiled/react/Icons/Link"
import WarningIcon from "cozy-ui/transpiled/react/Icons/Warning"
import Variants from 'cozy-ui/docs/components/Variants'

const sizes = ['xs', 's', 'm', 'l', 'xl']

const initialVariants = [{ disabled: false, border: false, innerBorder: false }]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <>
      {supportedColors.map(color => (
        <div key={color} className="u-flex u-flex-items-center u-mb-half" style={{ gap: '0.5rem' }}>
          {sizes.map(size => (
            <React.Fragment key={size}>
              <Avatar size={size} color={color} disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder} />
              <Avatar size={size} color={color} disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder}>AB</Avatar>
              <Avatar size={size} color={color} disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder}><Icon icon={LinkIcon} /></Avatar>
            </React.Fragment>
          ))}
        </div>
      ))}
      <div className="u-flex u-flex-items-center u-mb-half" style={{ gap: '0.5rem' }}>
        <Avatar src={cozyLogo} disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder} />
        <Avatar color="none" src={cozyLogo} disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder} />
        <Avatar color="sunrise" src={cozyLogo} disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder} />
        <Avatar disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder} />
        <Avatar color="none" disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder} />
        <Avatar color="sunrise" disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder} />
        <Avatar disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder}>AB</Avatar>
        <Avatar color="none" disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder}>BC</Avatar>
        <Avatar color="sunrise" disabled={variant.disabled} border={variant.border} innerBorder={variant.innerBorder}>CD</Avatar>
      </div>
    </>
  )}
</Variants>
```
