import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'

export const IntentHeader = ({ appName, appEditor, appIcon, className }) => (
  <div className={cx(styles['intentHeader'], className)}>
    <h1 className={styles['intentHeader-title']}>
      <img className={styles['intentHeader-icon']} src={appIcon} />
      {appEditor && (
        <span>
          {appEditor}
          &nbsp;
        </span>
      )}
      {appName}
    </h1>
  </div>
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
