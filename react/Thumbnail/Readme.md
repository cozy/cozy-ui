```jsx
import Thumbnail from 'cozy-ui/transpiled/react/Thumbnail'
import Skeleton from 'cozy-ui/transpiled/react/Skeleton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import Box from 'cozy-ui/transpiled/react/Box'
import CloudWallpaper from 'cozy-ui/docs/cloud-wallpaper.jpg'

;

<>
  <Thumbnail className="u-mb-1">
    <Skeleton variant="rect" animation="wave" />
  </Thumbnail>
  <Thumbnail className="u-mb-1" isStacked={true}>
    <Skeleton variant="rect" animation="wave" />
  </Thumbnail>
  <Thumbnail className="u-mb-1">
    <img src={CloudWallpaper} alt="" />
  </Thumbnail>
  <Thumbnail className="u-mb-1" isStacked={true}>
    <img src={CloudWallpaper} alt="" />
  </Thumbnail>
  <Thumbnail className="u-mb-1" isStacked={true}>
    <Icon icon={PeopleIcon} />
  </Thumbnail>
  <Thumbnail className="u-mb-1">
    <Icon icon={PeopleIcon} />
  </Thumbnail>
</>
```
