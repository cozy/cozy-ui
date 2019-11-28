import React from 'react'
import PropTypes from 'prop-types'

import { Avatar } from '../../Avatar'
import ContactName from './ContactName'
import { getInitials } from '../helpers'
import styles from '../styles.styl'

const MyselfMarker = (props, { t }) => (
  <span className={styles['contact-myself']}>({t('me')})</span>
)
const ContactIdentity = ({ name, myself }) => (
  <div className={styles['contact-identity']}>
    <Avatar text={getInitials(name).toUpperCase()} size="small" />
    <ContactName firstname={name.givenName} lastname={name.familyName} />
    {myself && <MyselfMarker />}
  </div>
)
ContactIdentity.propTypes = {
  myself: PropTypes.bool
}
ContactIdentity.defaultProps = {
  myself: false
}

export default ContactIdentity
