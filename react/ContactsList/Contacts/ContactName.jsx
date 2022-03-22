import React from 'react'
import styles from '../styles.styl'
import { Contact } from 'cozy-doctypes'

const ContactName = ({ contact }) => {
  const name = contact.name || {}
  const {
    givenName: firstname = contact.fullname,
    familyName: lastname = ''
  } = name

  return (
    <div>
      <span className={styles['contact-firstname']}>{firstname}</span>
      &nbsp;
      <span className={styles['contact-lastname']}>{lastname}</span>
    </div>
  )
}

ContactName.propTypes = {
  contact: Contact.propType.isRequired
}

export default ContactName
