import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import { createUseI18n } from '../I18n'

import en from './locales/en.json'
import fr from './locales/fr.json'

const locales = { en, fr }
const useI18n = createUseI18n(locales)

const FilePickerFooter = ({ onConfirm, onClose, disabledConfirm }) => {
  const { t } = useI18n()

  return (
    <>
      <Button
        data-testid="close-btn"
        label={t('footer.buttons.cancel')}
        theme="secondary"
        onClick={onClose}
      />
      <Button
        data-testid="confirm-btn"
        label={t('footer.buttons.confirm')}
        onClick={onConfirm}
        disabled={disabledConfirm}
      />
    </>
  )
}

FilePickerFooter.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  disabledConfirm: PropTypes.bool.isRequired
}

export default memo(FilePickerFooter)
