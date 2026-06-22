import { Icon, CrossMedium } from '@linagora/twake-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { createUseI18n } from 'twake-i18n'

import locales from './locales'
import styles from './styles.styl'
import IconButton from '../IconButton'

const useI18n = createUseI18n(locales)

const CloseButton = ({ onClick, ...props }) => {
  const { t } = useI18n()
  return (
    <div className={styles.DialogCloseButton}>
      <IconButton
        onClick={onClick}
        {...props}
        aria-label={t('closeButton')}
        className="dialogIconButton"
        size="medium"
      >
        <Icon icon={CrossMedium} />
      </IconButton>
    </div>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CloseButton
