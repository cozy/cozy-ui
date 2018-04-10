import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Text, Caption } from '../Text'
import styles from './styles.styl'

const ListItemText = props => {
  const { primaryText, secondaryText, className, ellipsis, children } = props
  return (
    <div className={cx(
      styles['c-list-text'],
      className)}
    >
      {primaryText && <Text ellipsis={ellipsis}>{primaryText}</Text>}
      {secondaryText && <Caption ellipsis={ellipsis}>{secondaryText}</Caption>}
      {children}
    </div>
  )
}

ListItemText.propTypes = {
  children: PropTypes.node,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  className: PropTypes.string,
  ellipsis: PropTypes.bool
}

ListItemText.defaultProps = {
  ellipsis: true
}

export default ListItemText
