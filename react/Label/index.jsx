import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles'

const Label = props => {
  const { forID, className, children, error } = props
  return (
    <label
      for={forID}
      className={cx(
        styles['c-label'], {
          [styles[`is-error`]] : error
        },
        className)}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  forID: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool
}

Label.defaultProps = {
  forID: '',
  className: '',
  error: false
}

export default Label
