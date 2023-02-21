import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'

import cx from 'classnames'

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
