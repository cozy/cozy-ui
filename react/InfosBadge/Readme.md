The InfosBadge is used to provide extra information about the item it is annotating.

```
import InfosBadge from 'cozy-ui/transpiled/react/InfosBadge';
import Icon from 'cozy-ui/transpiled/react/Icon';

import LinkIcon from "cozy-ui/transpiled/react/Icons/Link";
import CircleFilledIcon from "cozy-ui/transpiled/react/Icons/CircleFilled";

<p>
  <InfosBadge badgeContent={<Icon icon={LinkIcon} size="10" />}>
    <Icon icon={CircleFilledIcon} size="32" color="var(--slateGrey)" />
  </InfosBadge>
</p>
```
