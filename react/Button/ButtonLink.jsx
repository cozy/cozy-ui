import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles'

const ButtonLink = props => {
  const { theme, href, target, className, children, onClick } = props
  return (
    <a
      href={href}
      target={target ? '_blank' : undefined}
      className={cx(
        styles['c-btn'], {
          [styles[`c-btn--${theme}`]] : theme
        },
        className)}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

ButtonLink.defaultProps = {
  theme: '',
  href: '',
  target: false,
  className: '',
  onClick: null
}

export default ButtonLink
