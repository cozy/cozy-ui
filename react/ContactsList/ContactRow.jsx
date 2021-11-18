import React from 'react'
import cx from 'classnames'
import { Contact } from 'cozy-doctypes'
import { models } from 'cozy-client'

import ContactPhone from './Contacts/ContactPhone'
import ContactIdentity from './Contacts/ContactIdentity'
import ContactCozy from './Contacts/ContactCozy'
import ContactEmail from './Contacts/ContactEmail'
import useBreakpoints from '../hooks/useBreakpoints'
import styles from './styles.styl'

const { contact: contactModel } = models

const ContactRow = ({ className, contact, onClick, ...rest }) => {
  const { isMobile } = useBreakpoints()
  const phone = contactModel.getPrimaryPhone(contact) || undefined
  const email = contactModel.getPrimaryEmail(contact) || undefined
  const cozyUrl = contactModel.getPrimaryCozy(contact) || undefined

  return (
    <div
      className={cx(
        styles['contact'],
        {
          [styles['contact--clickable']]: onClick
        },
        className
      )}
      onClick={() => onClick(contact)}
      {...rest}
    >
      <ContactIdentity contact={contact} />
      {!isMobile && <ContactEmail email={email} />}
      {!isMobile && <ContactPhone phone={phone} />}
      {!isMobile && <ContactCozy cozyUrl={cozyUrl} />}
    </div>
  )
}

ContactRow.propTypes = {
  contact: Contact.propType.isRequired
}

export default ContactRow
