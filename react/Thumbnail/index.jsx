import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Thumbnail.styl'

/**
 * Wrap an element with an outline or a stacked outline
 * @param {object} params
 * @param {string} params.className
 * @param {boolean} params.isStacked - Either we want the stacking effect
 * @param {node} params.children
 * @returns Wrapped element
 */
const Thumbnail = ({ className, isStacked, children, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cx(className, styles['container'])}
        aria-hidden="true"
      >
        <div
          className={cx(styles['wrapper'], {
            [styles['stacked']]: isStacked
          })}
        >
          {children}
        </div>
      </div>
    </>
  )
}

Thumbnail.propTypes = {
  className: PropTypes.string,
  isStacked: PropTypes.bool,
  children: PropTypes.node
}

export default Thumbnail
