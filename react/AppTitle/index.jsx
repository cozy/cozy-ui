import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Icon from '../Icon'
import TwakeTextIcon from '../Icons/TwakeText'
import { useCozyTheme } from '../providers/CozyTheme'

const AppTitle = ({ appIcon, appTextIcon }) => {
  const { isLight } = useCozyTheme()

  if (!appIcon || !appTextIcon) {
    return null
  }

  return (
    <div className="u-flex u-flex-items-center">
      <Icon
        icon={appIcon}
        size="32"
        className={styles['c-apptitle-app-icon']}
      />
      <Icon
        icon={TwakeTextIcon}
        width="auto"
        height="22"
        className={cx(
          'u-mr-half',
          'u-w-auto',
          isLight ? styles['c-apptitle-light'] : styles['c-apptitle-dark']
        )}
      />
      <Icon icon={appTextIcon} width="auto" height="22" className="u-w-auto" />
    </div>
  )
}

AppTitle.propTypes = {
  appIcon: PropTypes.func,
  appTextIcon: PropTypes.func
}

export default AppTitle
