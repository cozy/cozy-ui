import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.styl'

const ViewerWrapper = ({ className, children, dark }) => (
  <div
    className={cx(styles['viewer-wrapper'], className, {
      [styles['viewer-wrapper--light']]: !dark
    })}
    role="viewer"
  >
    {children}
  </div>
)

ViewerWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  dark: PropTypes.bool
}

export default ViewerWrapper
