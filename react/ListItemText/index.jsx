import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Text from '../Text'
import TextNote from '../TextNote'
import styles from './styles.styl'

const ListItemText = props => {
  const { primaryText, secondaryText, className, ellipsis } = props
  return (
    <div className={cx(
      styles['c-list-text'],
      className)}
    >
      <Text ellipsis={ellipsis}>{primaryText}</Text>
      <TextNote ellipsis={ellipsis}>{secondaryText}</TextNote>
    </div>
  )
}

ListItemText.propTypes = {
  children: PropTypes.node,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  className: PropTypes.string,
  ellipsis: PropTypes.bool
}

ListItemText.defaultProps = {
  ellipsis: true
}

export default ListItemText
