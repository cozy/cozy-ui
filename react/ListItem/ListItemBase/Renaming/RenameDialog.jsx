import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../Buttons'
import { ConfirmDialog } from '../../../CozyDialogs'
import { useI18n } from '../../../providers/I18n'

import withListItemLocales from '../../hoc/withListItemLocales'

const RenameDialog = ({ onSubmit, onCancel }) => {
  const { t } = useI18n()

  return (
    <ConfirmDialog
      open
      title={t('ListItem.renameModal.title')}
      content={t('ListItem.renameModal.content')}
      actions={
        <>
          <Button
            variant="secondary"
            label={t('ListItem.renameModal.cancel')}
            onClick={onCancel}
          />
          <Button label={t('ListItem.renameModal.submit')} onClick={onSubmit} />
        </>
      }
      onClose={onCancel}
    />
  )
}

RenameDialog.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
}

export default withListItemLocales(RenameDialog)
