import cx from 'classnames'
import React from 'react'

import ThumbnailWrapper from './ThumbnailWrapper'

import styles from './Thumbnail.styl'

const ThumbnailImage = ({ image, isStacked }) => {
  return (
    <ThumbnailWrapper isStacked={isStacked}>
      <img
        className={cx(styles['image'], {
          [styles['image__multiple']]: isStacked
        })}
        data-testid="ThumbnailImage"
        src={image}
        alt=""
      />
    </ThumbnailWrapper>
  )
}

export default ThumbnailImage
