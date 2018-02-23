import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Textarea = props => {
  const { className, placeholder, children, error, ...restProps } = props
  return (
    <textarea
      placeholder={placeholder}
      className={cx(
        styles['c-textarea'], {
          [styles[`is-error`]] : error
        },
        className)}
      {...restProps}
    >
      {children}
    </textarea>
  )
}

Textarea.propTypes = {
  children: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool
}

Textarea.defaultProps = {
  placeholder: '',
  className: '',
  error: false
}

export default Textarea
