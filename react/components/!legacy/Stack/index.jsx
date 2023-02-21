import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Stack = ({ spacing, tag: Tag, ...props }) => {
  return (
    <Tag
      {...props}
      className={cx(props.className, spacing && styles['Stack--' + spacing])}
    />
  )
}

export const spacingProp = PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl'])

Stack.propTypes = {
  spacing: spacingProp
}

Stack.defaultProps = {
  spacing: 'm',
  tag: 'div'
}

export default Stack
