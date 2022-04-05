import React from 'react'
import PropTypes from 'prop-types'

import { TableCell } from '../../Table'
import styles from '../styles.styl'

const ContactCozy = ({ cozyUrl }) => (
  <TableCell className={`${styles['contact-cozyurl']} u-ellipsis`}>
    {cozyUrl}
  </TableCell>
)
ContactCozy.propTypes = {
  cozyUrl: PropTypes.string
}
ContactCozy.defaultProps = {
  cozyUrl: '—'
}

export default ContactCozy
