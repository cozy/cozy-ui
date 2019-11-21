import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.styl'

const ContactPhone = ({ phone }) => (
  <div className={styles['contact-phone']}>{phone}</div>
)

ContactPhone.propTypes = {
  phone: PropTypes.string
}
ContactPhone.defaultProps = {
  phone: '—'
}

export default ContactPhone
