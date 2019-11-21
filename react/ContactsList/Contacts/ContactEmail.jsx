import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.styl'

const ContactEmail = ({ email }) => (
  <div className={styles['contact-email']}>{email}</div>
)
ContactEmail.propTypes = {
  email: PropTypes.string
}
ContactEmail.defaultProps = {
  email: '—'
}

export default ContactEmail
