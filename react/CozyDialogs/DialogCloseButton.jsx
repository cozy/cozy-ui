import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '../IconButton'
import Icon from '../Icon'
import CrossMediumIcon from '../Icons/CrossMedium'
import { createUseI18n } from '../providers/I18n'

import styles from './styles.styl'
import locales from './locales'

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
        <Icon icon={CrossMediumIcon} />
      </IconButton>
    </div>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CloseButton
