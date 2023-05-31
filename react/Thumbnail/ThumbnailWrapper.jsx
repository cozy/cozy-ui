import React from 'react'
import cx from 'classnames'

import styles from './Thumbnail.styl'

const ThumbnailWrapper = ({ children, isStacked }) => {
  return (
    <div
      className={cx(styles['image__wrapper'], {
        [styles['image__wrapper__multiple']]: isStacked
      })}
      data-testid="ThumbnailWrapper"
    >
      {children}
    </div>
  )
}

export default ThumbnailWrapper
