import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const TextNote = props => {
  const { className, children, tag, ellipsis } = props
  const Tag = tag
  return (
    <Tag className={cx(
      styles['g-text-note'], {
        [styles['u-ellipsis']] : ellipsis
      },
      className)}
    >
      {children}
    </Tag>
  )
}

TextNote.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
  ellipsis: PropTypes.bool
}

TextNote.defaultProps = {
  tag: 'div',
  ellipsis: false
}

export default TextNote
