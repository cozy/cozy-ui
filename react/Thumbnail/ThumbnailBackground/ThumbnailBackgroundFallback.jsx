import React from 'react'

import Skeleton from '../../Skeleton'
import { getSkeletonSize } from '../helpers'
import ThumbnailBackgroundWrapper from './ThumbnailBackgroundWrapper'

const ThumbnailBackgroundFallback = () => {
  const skeletonSize = getSkeletonSize(true)

  return (
    <ThumbnailBackgroundWrapper>
      <Skeleton
        data-testid="SkeletonBackground"
        variant="rect"
        animation={false}
        width={skeletonSize}
        height={skeletonSize}
      />
    </ThumbnailBackgroundWrapper>
  )
}

export default ThumbnailBackgroundFallback
