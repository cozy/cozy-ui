The InfosBadge is used to provide extra information about the item it is annotating.

```jsx
import Badge from 'cozy-ui/transpiled/react/Badge'
import { CircleFilled, Icon, Link } from '@linagora/twake-icons'

;

<Badge
  badgeContent={
    <div
      className="u-h-1-half u-miw-1-half u-bdrs-circle u-flex u-flex-items-center u-flex-justify-center"
      style={{
        backgroundColor: 'var(--paperBackgroundColor)',
        color: 'var(--iconTextColor)',
        boxShadow: 'var(--shadow3)'
      }}
    >
      <Icon icon={Link} size="10" />
    </div>
  }
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Icon icon={CircleFilled} size="32" color="var(--slateGrey)" />
</Badge>

```
