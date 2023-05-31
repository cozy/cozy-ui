import React from 'react'

import Icon from '../../Icon'
import { getSkeletonSize } from '../helpers'
import ThumbnailBackgroundWrapper from './ThumbnailBackgroundWrapper'

const ThumbnailBackgroundIcon = ({ icon }) => {
  const skeletonSize = getSkeletonSize(true)

  return (
    <ThumbnailBackgroundWrapper>
      <Icon
        icon={icon}
        height={skeletonSize}
        width={skeletonSize}
        data-testid="BackgroundThumbnailIcon"
      />
    </ThumbnailBackgroundWrapper>
  )
}

export default ThumbnailBackgroundIcon
