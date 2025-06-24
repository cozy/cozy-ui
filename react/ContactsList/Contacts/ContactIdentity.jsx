import PropTypes from 'prop-types'
import React from 'react'

import { getInitials } from 'cozy-client/dist/models/contact'

import ContactName from './ContactName'
import Avatar from '../../Avatar'
import { TableCell } from '../../deprecated/Table'
import styles from '../styles.styl'

const MyselfMarker = (props, { t }) => (
  <span className={`${styles['contact-myself']}`}>({t('me')})</span>
)

const ContactIdentity = ({ contact }) => {
  const isMyself = contact.metadata ? !!contact.metadata.me : false

  return (
    <TableCell
      data-testid="ContactIdentity" // used by a test in cozy-contacts
      className={`${styles['contact-identity']} u-flex u-flex-items-center u-ellipsis u-p-0`}
    >
      <Avatar display="inline" size="s">
        {getInitials(contact)}
      </Avatar>
      <ContactName contact={contact} />
      {isMyself && <MyselfMarker />}
    </TableCell>
  )
}

ContactIdentity.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactIdentity
