import React, { useState } from 'react'
import ContactsListModal from '../ContactsListModal'
import styles from './styles.styl'
import cx from 'classnames'
import { Contact } from 'cozy-doctypes'

const SelectControl = props => {
  const { className, children, ...rest } = props

  return (
    <button
      type="button"
      className={cx(styles.SelectControl, className)}
      {...rest}
    >
      {children}
    </button>
  )
}

const ContactPicker = props => {
  const { placeholder, listPlaceholder, onChange, value, ...rest } = props
  const [showContactsList, setShowContactsList] = useState(false)

  const handleChange = contact => {
    onChange(contact)
  }

  return (
    <>
      <SelectControl {...rest} onClick={() => setShowContactsList(true)}>
        {value ? Contact.getDisplayName(value) : placeholder}
      </SelectControl>
      {showContactsList && (
        <ContactsListModal
          dismissAction={() => setShowContactsList(false)}
          onItemClick={handleChange}
          placeholder={listPlaceholder}
        />
      )}
    </>
  )
}

export default ContactPicker
