import React from 'react'

import ThumbnailIcon from './ThumbnailIcon'
import ThumbnailImage from './ThumbnailImage'
import ThumbnailFallback from './ThumbnailFallback'
import ThumbnailBackgroundIcon from './ThumbnailBackground/ThumbnailBackgroundIcon'
import ThumbnailBackgroundImage from './ThumbnailBackground/ThumbnailBackgroundImage'
import ThumbnailBackgroundFallback from './ThumbnailBackground/ThumbnailBackgroundFallback'

const ThumbnailByType = ({ image, icon, isStacked }) => {
  if (icon) {
    return (
      <>
        <ThumbnailIcon icon={icon} isStacked={isStacked} />
        {isStacked && <ThumbnailBackgroundIcon icon={icon} />}
      </>
    )
  }

  if (image) {
    return (
      <>
        <ThumbnailImage image={image} isStacked={isStacked} />
        {isStacked && <ThumbnailBackgroundImage image={image} />}
      </>
    )
  }

  return (
    <>
      <ThumbnailFallback isStacked={isStacked} />
      {isStacked && <ThumbnailBackgroundFallback />}
    </>
  )
}

export default ThumbnailByType
