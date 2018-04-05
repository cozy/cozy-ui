import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Text = props => {
  const { className, children, tag, ellipsis } = props
  const Tag = tag
  return (
    <Tag className={cx(
      styles['g-text'], {
        [styles['u-ellipsis']] : ellipsis
      },
      className)}
    >
      {children}
    </Tag>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
  ellipsis: PropTypes.bool
}

Text.defaultProps = {
  tag: 'div',
  ellipsis: false
}

export default Text
