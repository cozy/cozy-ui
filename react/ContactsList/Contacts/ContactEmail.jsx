import React from 'react'
import PropTypes from 'prop-types'

import { TableCell } from '../../Table'
import styles from '../styles.styl'

const ContactEmail = ({ email }) => (
  <TableCell className={`${styles['contact-email']} u-ellipsis`}>
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
