import React from 'react'

import Icon from '../Icon'
import ThumbnailWrapper from './ThumbnailWrapper'
import { getSkeletonSize } from './helpers'

const ThumbnailIcon = ({ icon, isStacked }) => {
  const skeletonSize = getSkeletonSize(isStacked)

  return (
    <ThumbnailWrapper isStacked={isStacked}>
      <Icon
        data-testid="ThumbnailIcon"
        icon={icon}
        height={skeletonSize}
        width={skeletonSize}
      />
    </ThumbnailWrapper>
  )
}

export default ThumbnailIcon
