### IconGrid

A component to display a grid of 4 icons. This component is not considered stable and may be replaced by a more generic grid component in the future.

```jsx
import IconGrid from 'cozy-ui/transpiled/react/Labs/IconGrid'
import { Cloud, CloudHappy, File, Icon, Online } from '@linagora/twake-icons'

;

<IconGrid>
  <Icon icon={File} />
  <Icon icon={Cloud} />
  <Icon icon={CloudHappy} />
  <Icon icon={Online} />
</IconGrid>
