import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles'

const Button = (props) => {
  const { theme = 'regular', busy = false, className = '', children, onClick = null } = props
  return <button
    aria-busy={busy}
    role='button'
    className={cx(styles['coz-btn'], styles[`coz-btn--${theme}`], className)}
    onClick={onClick}>
    {children}
  </button>
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.string,
  busy: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
