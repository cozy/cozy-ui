import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.styl'

const ContactName = ({ firstname, lastname }) => (
  <div>
    <span className={styles['contact-firstname']}>{firstname}</span>
    &nbsp;
    <span className={styles['contact-lastname']}>{lastname}</span>
  </div>
)
ContactName.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  me: PropTypes.bool
}
ContactName.defaultProps = {
  firstname: '',
  lastname: '',
  me: false
}
export default ContactName
