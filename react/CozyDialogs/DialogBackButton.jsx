import PropTypes from 'prop-types'
import React from 'react'

import locales from './locales'
import styles from './styles.styl'
import Icon from '../Icon'
import IconButton from '../IconButton'
import PreviousIcon from '../Icons/Previous'
import { createUseI18n } from '../providers/I18n'

const useI18n = createUseI18n(locales)

const DialogBackButton = ({ onClick, ...props }) => {
  const { t } = useI18n()
  return (
    <div className={styles.DialogBackButton}>
      <IconButton
        onClick={onClick}
        {...props}
        aria-label={t('backButton')}
        className="dialogIconButton"
        size="medium"
      >
        <Icon icon={PreviousIcon} />
      </IconButton>
    </div>
  )
}

DialogBackButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DialogBackButton
