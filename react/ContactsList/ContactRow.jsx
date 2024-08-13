import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import ListItem from '../ListItem'
import ContactPhone from './Contacts/ContactPhone'
import ContactIdentity from './Contacts/ContactIdentity'
import ContactCozy from './Contacts/ContactCozy'
import ContactEmail from './Contacts/ContactEmail'
import useBreakpoints from '../providers/Breakpoints'

const { getPrimaryCozy, getPrimaryPhone, getPrimaryEmail } = models.contact

const ContactRow = ({ className, contact, onClick, divider, ...rest }) => {
  const { isMobile } = useBreakpoints()
  const phone = getPrimaryPhone(contact) || undefined
  const email = getPrimaryEmail(contact) || undefined
  const cozyUrl = getPrimaryCozy(contact) || undefined
  const { isDesktop } = useBreakpoints()

  return (
    <ListItem
      data-testid="contact-listItem"
      className={cx({ 'u-c-pointer': onClick }, className)}
      divider={divider}
      gutters={isDesktop ? 'double' : 'default'}
      onClick={() => onClick(contact)}
      {...rest}
    >
      <ContactIdentity contact={contact} />
      {!isMobile && <ContactEmail email={email} />}
      {!isMobile && <ContactPhone phone={phone} />}
      {!isMobile && <ContactCozy cozyUrl={cozyUrl} />}
    </ListItem>
  )
}

ContactRow.propTypes = {
  contact: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  divider: PropTypes.bool
}

export default ContactRow
