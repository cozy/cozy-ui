```jsx
import Skeleton from 'cozy-ui/transpiled/react/Skeleton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import CloudWallpaper from 'cozy-ui/docs/cloud-wallpaper.jpg'

;

<>
  <div className="u-flex u-w-2 u-h-2 u-flex-items-center u-flex-justify-center">
    <Skeleton className="u-w-100 u-h-100" variant="rect" animation="wave" />
  </div>
  <div className="u-flex u-w-2 u-h-2 u-flex-items-center u-flex-justify-center">
    <img
      className="u-w-2 u-h-2"
      style={{ objectFit: "contain" }}
      src={CloudWallpaper}
      alt=""
    />
  </div>
  <div className="u-flex u-w-2 u-h-2 u-flex-items-center u-flex-justify-center">
    <Icon icon={PeopleIcon} />
  </div>
</>
```
