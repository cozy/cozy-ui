import React from 'react'
import cx from 'classnames'
import { Contact } from 'cozy-doctypes'
import ContactPhone from './Contacts/ContactPhone'

import ContactIdentity from './Contacts/ContactIdentity'
import ContactCozy from './Contacts/ContactCozy'
import ContactEmail from './Contacts/ContactEmail'
import styles from './styles.styl'
import useBreakpoints from '../hooks/useBreakpoints'

const ContactRow = props => {
  const { isMobile } = useBreakpoints()
  const { className, contact, onClick, ...rest } = props
  const phone = Contact.getPrimaryPhone(contact)
  const email = Contact.getPrimaryEmail(contact)
  const cozyUrl = Contact.getPrimaryCozy(contact)

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
