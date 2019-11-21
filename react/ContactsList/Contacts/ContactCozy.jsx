import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.styl'

const ContactCozy = ({ cozyUrl }) => (
  <div className={styles['contact-cozyurl']}>{cozyUrl}</div>
)
ContactCozy.propTypes = {
  cozyUrl: PropTypes.string
}
ContactCozy.defaultProps = {
  cozyUrl: '—'
}

export default ContactCozy
