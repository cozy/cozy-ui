import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import cx from 'classnames'

const ContactHeaderRow = props => {
  const { className, header, ...rest } = props

  return (
    <div className={cx(styles['divider'], className)} {...rest}>
      {header}
    </div>
  )
}

ContactHeaderRow.propTypes = {
  header: PropTypes.string.isRequired
}

export default ContactHeaderRow
