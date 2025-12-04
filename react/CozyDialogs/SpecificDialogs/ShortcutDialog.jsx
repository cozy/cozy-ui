import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useI18n } from 'twake-i18n'

import {
  checkAndSaveShortcut,
  makeHumanReadableFileName
} from './helpers/shortcuts'
import withSpecificDialogsLocales from './withSpecificDialogsLocales'
import { ConfirmDialog } from '..'
import Button from '../../Buttons'
import Stack from '../../Stack'
import TextField from '../../TextField'
import { useAlert } from '../../providers/Alert'

const ENTER_KEY = 13

const ShortcutDialog = ({ shortcut, onSave, onClose }) => {
  const { t } = useI18n()
  const { showAlert } = useAlert()

  const initialName = makeHumanReadableFileName(shortcut?.name || '')
  const initialUrl = shortcut?.url || ''
  const isEditing = !!shortcut

  const [fileName, setFilename] = useState(initialName)
  const [url, setUrl] = useState(initialUrl)

  const saveShortcut = () => {
    checkAndSaveShortcut({
      fileName,
      url,
      isEditing,
      onSave,
      onClose,
      showAlert,
      t
    })
  }

  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      saveShortcut()
    }
  }

  return (
    <ConfirmDialog
      open={true}
      title={
        isEditing
          ? t('shortcut-dialog.edit-title')
          : t('shortcut-dialog.create-title')
      }
      onClose={onClose}
      content={
        <Stack>
          <div>
            <TextField
              label={t('shortcut-dialog.url')}
              value={url}
              id="shortcuturl"
              variant="outlined"
              onChange={e => setUrl(e.target.value)}
              onKeyDown={e => handleKeyDown(e)}
              autoComplete="off"
              fullWidth
              margin="normal"
              autoFocus
            />
          </div>
          <div>
            <TextField
              label={t('shortcut-dialog.filename')}
              value={fileName}
              id="shortcutfilename"
              variant="outlined"
              onChange={e => setFilename(e.target.value)}
              onKeyDown={e => handleKeyDown(e)}
              autoComplete="off"
              fullWidth
              margin="normal"
            />
          </div>
        </Stack>
      }
      actions={
        <>
          <Button
            variant="secondary"
            onClick={onClose}
            label={t('shortcut-dialog.cancel')}
          />
          <Button
            variant="primary"
            label={
              isEditing
                ? t('shortcut-dialog.edit')
                : t('shortcut-dialog.create')
            }
            onClick={saveShortcut}
          />
        </>
      }
    />
  )
}

ShortcutDialog.propTypes = {
  /** An io.cozy.files.shortcut object if we want to prefill fields */
  shortcut: PropTypes.object,
  /** A function called when clicking the save button with filename and url */
  onSave: PropTypes.func,
  /** A function called when clicking the close button */
  onClose: PropTypes.func
}

ShortcutDialog.displayName = 'ShortcutDialog'

export default withSpecificDialogsLocales(ShortcutDialog)
