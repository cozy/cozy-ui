import React from 'react'

import Skeleton from '../Skeleton'
import ThumbnailWrapper from './ThumbnailWrapper'
import { getSkeletonSize } from './helpers'

const ThumbnailFallback = ({ isStacked }) => {
  const skeletonSize = getSkeletonSize(isStacked)

  return (
    <ThumbnailWrapper>
      <Skeleton
        variant="rect"
        animation="wave"
        width={skeletonSize}
        height={skeletonSize}
        style={{ borderRadius: 3 }}
        data-testid="Skeleton"
      />
    </ThumbnailWrapper>
  )
}

export default ThumbnailFallback
