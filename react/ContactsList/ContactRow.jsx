import React from 'react'
import withBreakpoints from '../helpers/withBreakpoints'
import cx from 'classnames'
import { Contact } from 'cozy-doctypes'

import ContactPhone from './Contacts/ContactPhone'
import ContactIdentity from './Contacts/ContactIdentity'
import ContactCozy from './Contacts/ContactCozy'
import ContactEmail from './Contacts/ContactEmail'
import styles from './styles.styl'

const ContactRow = props => {
  const {
    className,
    contact,
    breakpoints: { isMobile },
    onClick,
    ...rest
  } = props
  const phone = Contact.getPrimaryPhone(contact)
  const email = Contact.getPrimaryEmail(contact)
  const name = contact.name || {}
  const isMyself = contact.metadata ? !!contact.metadata.me : false
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
      <ContactIdentity name={name} myself={isMyself} />
      {!isMobile && <ContactEmail email={email} />}
      {!isMobile && <ContactPhone phone={phone} />}
      {!isMobile && <ContactCozy cozyUrl={cozyUrl} />}
    </div>
  )
}

ContactRow.propTypes = {
  contact: Contact.propType.isRequired
}

export default withBreakpoints()(ContactRow)
