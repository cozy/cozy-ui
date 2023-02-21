import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Label = props => {
  const { htmlFor, className, children, block, error, ...otherProps } = props
  return (
    <label
      htmlFor={htmlFor}
      className={cx(
        styles['c-label'],
        {
          [styles[`c-label--block`]]: block,
          [styles[`is-error`]]: error
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  block: PropTypes.bool
}

Label.defaultProps = {
  className: '',
  error: false,
  block: true
}

export default Label
