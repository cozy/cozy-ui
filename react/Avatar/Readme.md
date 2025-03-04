### Grouped

```jsx

import AvatarGroup, { spacingByAvatarSize } from 'cozy-ui/transpiled/react/AvatarGroup'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import { supportedColors } from 'cozy-ui/transpiled/react/Avatar/helpers'
import Icon from 'cozy-ui/transpiled/react/Icon'
import LinkIcon from "cozy-ui/transpiled/react/Icons/Link"
import cozyLogo from '../../docs/cozy-logo_white_128.png'

const sizes = ['xs', 's', 'm', 'l', 'xl']

;

sizes.map(size => (
  <AvatarGroup className="u-mb-half" key={size} max={5} size={size}>
    <Avatar size={size} color={supportedColors[0]}>AB</Avatar>
    <Avatar size={size} color={supportedColors[1]}>BC</Avatar>
    <Avatar size={size} color={supportedColors[2]}><Icon icon={LinkIcon} /></Avatar>
    <Avatar size={size} src={cozyLogo} />
    <Avatar size={size} color={supportedColors[4]}>EF</Avatar>
    <Avatar size={size} color={supportedColors[5]}>FG</Avatar>
  </AvatarGroup>
))
```

### Mui

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

const initialVariants = [{ disabled: false }]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <>
      {supportedColors.map(color => (
        <div key={color} className="u-flex u-flex-items-center u-mb-half" style={{ gap: '0.5rem' }}>
          {sizes.map(size => (
            <React.Fragment key={size}>
              <Avatar size={size} color={color} disabled={variant.disabled} />
              <Avatar size={size} color={color} disabled={variant.disabled}>AB</Avatar>
              <Avatar size={size} color={color} disabled={variant.disabled}><Icon icon={LinkIcon} /></Avatar>
            </React.Fragment>
          ))}
        </div>
      ))}
      <div className="u-flex u-flex-items-center u-mb-half" style={{ gap: '0.5rem' }}>
        {sizes.map(size => (
          <React.Fragment key={size}>
            <Avatar size={size} src={cozyLogo} disabled={variant.disabled} />
            <Avatar size={size} disabled={variant.disabled} />
          </React.Fragment>
        ))}
      </div>
    </>
  )}
</Variants>
```
