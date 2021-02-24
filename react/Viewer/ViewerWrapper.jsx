import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.styl'

const ViewerWrapper = ({ className, children }) => (
  <div id="viewer-wrapper" className={cx(styles['viewer-wrapper'], className)}>
    {children}
  </div>
)

ViewerWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default ViewerWrapper
