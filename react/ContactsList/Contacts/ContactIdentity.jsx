import React from 'react'
import { Contact } from 'cozy-doctypes'
import { models } from 'cozy-client'

import { Avatar } from '../../Avatar'
import ContactName from './ContactName'
import styles from '../styles.styl'

const { contact: contactModel } = models

const MyselfMarker = (props, { t }) => (
  <span className={styles['contact-myself']}>({t('me')})</span>
)

const ContactIdentity = ({ contact }) => {
  const isMyself = contact.metadata ? !!contact.metadata.me : false

  return (
    <div className={styles['contact-identity']}>
      <Avatar
        text={contactModel.getInitials(contact)}
        size="small"
        className={styles['contact-avatar']}
      />
      <ContactName contact={contact} />
      {isMyself && <MyselfMarker />}
    </div>
  )
}

ContactIdentity.propTypes = {
  contact: Contact.propType.isRequired
}

export default ContactIdentity
