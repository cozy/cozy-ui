import React from 'react'
import cx from 'classnames'

import ThumbnailBackgroundWrapper from './ThumbnailBackgroundWrapper'

import styles from '../Thumbnail.styl'

const ThumbnailBackgroundImage = ({ image }) => {
  return (
    <ThumbnailBackgroundWrapper>
      <img
        src={image}
        alt=""
        className={cx(
          styles['image'],
          styles['image__background'],
          styles['image__multiple']
        )}
        data-testid="BackgroundThumbnailImage"
      />
    </ThumbnailBackgroundWrapper>
  )
}

export default ThumbnailBackgroundImage
