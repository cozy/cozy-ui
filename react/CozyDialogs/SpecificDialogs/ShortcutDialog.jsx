import PropTypes from 'prop-types'
import React, { useState, forwardRef } from 'react'

import withSpecificDialogsLocales from './withSpecificDialogsLocales'
import { ConfirmDialog } from '..'
import Button from '../../Buttons'
import Stack from '../../Stack'
import TextField from '../../TextField'
import { useAlert } from '../../providers/Alert'
import { useI18n } from '../../providers/I18n'

const ENTER_KEY = 13

const isURLValid = url => {
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}

const makeURLValid = str => {
  if (isURLValid(str)) return str
  else if (isURLValid(`https://${str}`)) return `https://${str}`
  return false
}

const makeFilenameValid = fileName =>
  fileName.endsWith('.url') ? fileName : fileName + '.url'

const makeFilenameHumanReadable = fileName =>
  fileName.endsWith('.url') ? fileName.slice(0, -4) : fileName

const ShortcutDialog = forwardRef(({ shortcut, onSave, onClose }, ref) => {
  const { t } = useI18n()
  const { showAlert } = useAlert()

  const initialName = makeFilenameHumanReadable(shortcut?.name || '')
  const initialUrl = shortcut?.url || ''
  const isEditing = !!shortcut

  const [fileName, setFilename] = useState(initialName)
  const [url, setUrl] = useState(initialUrl)

  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      createShortcut()
    }
  }

  const createShortcut = async () => {
    if (!fileName || !url) {
      showAlert({ message: t('shortcut-dialog.needs-info'), severity: 'error' })
      return
    }

    const makedFileName = makeFilenameValid(fileName)

    const makedURL = makeURLValid(url)

    if (!makedURL) {
      showAlert({
        message: t('shortcut-dialog.url-bad-format'),
        severity: 'error'
      })
      return
    }
    try {
      onSave(makedFileName, makedURL)

      showAlert({
        message: isEditing
          ? t('shortcut-dialog.edited')
          : t('shortcut-dialog.created'),
        severity: 'success'
      })
    } catch {
      showAlert({ message: t('shortcut-dialog.errored'), severity: 'error' })
    }

    onClose()
  }

  return (
    <ConfirmDialog
      ref={ref}
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
            onClick={createShortcut}
          />
        </>
      }
    />
  )
})

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
