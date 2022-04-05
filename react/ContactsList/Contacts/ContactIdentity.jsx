import React from 'react'
import { Contact } from 'cozy-doctypes'
import { models } from 'cozy-client'

import { Avatar } from '../../Avatar'
import { TableCell } from '../../Table'
import ContactName from './ContactName'
import styles from '../styles.styl'

const { getDisplayName, getInitials } = models.contact

const MyselfMarker = (props, { t }) => (
  <span className={`${styles['contact-myself']}`}>({t('me')})</span>
)

const ContactIdentity = ({ contact }) => {
  const name = contact.name || {}
  const displayName = getDisplayName(contact) || undefined
  const isMyself = contact.metadata ? !!contact.metadata.me : false

  return (
    <TableCell
      className={`${
        styles['contact-identity']
      } u-flex u-flex-items-center u-ellipsis`}
    >
      <Avatar text={getInitials(contact)} size="small" />
      <ContactName displayName={displayName} familyName={name.familyName} />
      {isMyself && <MyselfMarker />}
    </TableCell>
  )
}

ContactIdentity.propTypes = {
  contact: Contact.propType.isRequired
}

export default ContactIdentity
