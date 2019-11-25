import React from 'react'
import PropTypes from 'prop-types'
import withBreakpoints from '../helpers/withBreakpoints'
import cx from 'classnames'

import contactPropTypes from './ContactPropTypes'

import ContactPhone from './Contacts/ContactPhone'
import ContactIdentity from './Contacts/ContactIdentity'
import ContactCozy from './Contacts/ContactCozy'
import ContactEmail from './Contacts/ContactEmail'
import styles from './styles.styl'

const getPrimaryOrFirst = (arr = [{}]) => arr.find(obj => obj.primary) || arr[0]

const ContactRow = props => {
  const {
    className,
    contact,
    breakpoints: { isMobile },
    onClick,
    ...rest
  } = props
  const { number: phone } = getPrimaryOrFirst(contact.phone) || {
    number: undefined
  }

  const { address: email } = getPrimaryOrFirst(contact.email) || {
    address: undefined
  }
  const name = contact.name || {}
  const isMyself = contact.metadata ? !!contact.metadata.me : false
  const cozyUrl = getPrimaryOrFirst(contact.cozy) || { url: undefined }
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
      {!isMobile && <ContactCozy cozyUrl={cozyUrl.url} />}
    </div>
  )
}

ContactRow.propTypes = {
  contact: PropTypes.shape({
    name: contactPropTypes.name,
    email: PropTypes.arrayOf(contactPropTypes.email),
    phone: PropTypes.arrayOf(contactPropTypes.phone),
    metadata: contactPropTypes.metadata
  }).isRequired
}

export default withBreakpoints()(ContactRow)
