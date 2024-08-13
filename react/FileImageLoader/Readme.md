### FileImageLoader

A component to get the image in `links` prop of a file, according to its class (could be `image` or `pdf`).

```jsx
import DemoProvider from 'cozy-ui/transpiled/react/Viewer/docs/DemoProvider'

import FileImageLoader from 'cozy-ui/transpiled/react/FileImageLoader'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileDuotoneIcon from "cozy-ui/transpiled/react/Icons/FileDuotone"
import BankIcon from "cozy-ui/transpiled/react/Icons/Bank"
import CloudWallpaper from 'cozy-ui/docs/cloud-wallpaper.jpg'

const file = {
  _id: 'image',
  class: 'image',
  name: 'Demo.img',
  mime: 'application/jpeg',
  links: {
    large: CloudWallpaper
  }
}

const onImageError = () => console.info('image errored')
const onImageLoad = () => console.info('image loaded!')
const FallbackComp = () => {
  return (
    <div>fallback component</div>
  )
}

;

<DemoProvider>
  <FileImageLoader
    file={file}
    linkType="large"
    onError={onImageError}
    render={src => (
      <img
        src={src}
        height={300}
        onLoad={onImageLoad}
      />
    )}
    renderFallback={() => <FallbackComp />}
  />
</DemoProvider>
```
