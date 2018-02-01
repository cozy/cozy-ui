import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

export const IntentHeader = ({ appName, appEditor, appIcon }) =>
  (
    <h2 className={styles['intentHeader']}>
      <div className={styles['intentHeader-title']}>
        <img className={styles['intentHeader-icon']} src={appIcon} />
        {appEditor && <span>{appEditor}&nbsp;</span> }
        {appName}
      </div>
    </h2>
  )

IntentHeader.propTypes = {
  appIcon: PropTypes.string,
  appEditor: PropTypes.string,
  appName: PropTypes.string.isRequired
}

IntentHeader.defaultProps = {
  appIcon: '',
  appEditor: '',
  appName: ''
}

export default IntentHeader
