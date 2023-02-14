import React from 'react'
import PropTypes from 'prop-types'

import { TableCell } from '../../Table'
import styles from '../styles.styl'

const ContactPhone = ({ phone }) => (
  <TableCell
    data-testid="ContactPhone" // used by a test in cozy-contacts
    className={`${styles['contact-phone']} u-ellipsis`}
  >
    {phone}
  </TableCell>
)

ContactPhone.propTypes = {
  phone: PropTypes.string
}
ContactPhone.defaultProps = {
  phone: '—'
}

export default ContactPhone
