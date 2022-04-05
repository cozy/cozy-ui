import React from 'react'
import PropTypes from 'prop-types'

import { TableCell } from '../../Table'
import styles from '../styles.styl'

const ContactPhone = ({ phone }) => (
  <TableCell className={`${styles['contact-phone']} u-ellipsis`}>
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
