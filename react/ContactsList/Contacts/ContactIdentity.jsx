import React from 'react'
import { Contact } from 'cozy-doctypes'

import { Avatar } from '../../Avatar'
import ContactName from './ContactName'
import styles from '../styles.styl'

const MyselfMarker = (props, { t }) => (
  <span className={styles['contact-myself']}>({t('me')})</span>
)

const ContactIdentity = ({ contact }) => {
  const isMyself = contact.metadata ? !!contact.metadata.me : false

  return (
    <div className={styles['contact-identity']}>
      <Avatar text={Contact.getInitials(contact)} size="small" />
      <ContactName contact={contact} />
      {isMyself && <MyselfMarker />}
    </div>
  )
}

ContactIdentity.propTypes = {
  contact: Contact.propType.isRequired
}

export default ContactIdentity
