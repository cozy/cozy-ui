import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Text, Caption } from '../Text'
import styles from './List.styl'

export const List = props => <div>{props.children}</div>

export const Header = ({ children }) => (
  <div className={styles['c-list-header']}>{children}</div>
)

export const Row = ({ children }) => (
  <div className={styles['c-list-row']}>{children}</div>
)

export const Content = props => {
  const {
    primaryText,
    secondaryText,
    className,
    ellipsis,
    children,
    ...rest
  } = props
  return (
    <div className={cx(styles['c-list-text'], className)} {...rest}>
      {primaryText && <Text ellipsis={ellipsis}>{primaryText}</Text>}
      {secondaryText && <Caption ellipsis={ellipsis}>{secondaryText}</Caption>}
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  className: PropTypes.string,
  ellipsis: PropTypes.bool
}

Content.defaultProps = {
  ellipsis: true
}
