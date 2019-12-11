import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Stack = ({ spacing, ...props }) => {
  return (
    <div
      {...props}
      className={cx(
        props.className,
        styles.Stack,
        spacing && styles['Stack--' + spacing]
      )}
    />
  )
}

Stack.propTypes = {
  spacing: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl'])
}

Stack.defaultProps = {
  spacing: 'm'
}

export default Stack
