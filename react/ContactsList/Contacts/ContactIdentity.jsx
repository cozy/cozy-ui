import React from 'react'
import { models } from 'cozy-client'
import PropTypes from 'prop-types'

import { Avatar } from '../../Avatar'
import { TableCell } from '../../deprecated/Table'
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
      data-testid="ContactIdentity" // used by a test in cozy-contacts
      className={`${
        styles['contact-identity']
      } u-flex u-flex-items-center u-ellipsis u-p-0`}
    >
      <Avatar text={getInitials(contact)} size="small" />
      <ContactName displayName={displayName} familyName={name.familyName} />
      {isMyself && <MyselfMarker />}
    </TableCell>
  )
}

ContactIdentity.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactIdentity
