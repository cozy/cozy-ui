import React from 'react'
import PropTypes from 'prop-types'

import { TableCell } from '../../deprecated/Table'
import styles from '../styles.styl'

const ContactEmail = ({ email }) => (
  <TableCell
    data-testid="ContactEmail" // used by a test in cozy-contacts
    className={`${styles['contact-email']} u-ellipsis u-p-0`}
  >
    {email}
  </TableCell>
)
ContactEmail.propTypes = {
  email: PropTypes.string
}
ContactEmail.defaultProps = {
  email: '—'
}

export default ContactEmail
