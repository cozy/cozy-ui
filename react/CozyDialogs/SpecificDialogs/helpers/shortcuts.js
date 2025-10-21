export const isValidURL = url => {
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}

export const makeValidUrl = str => {
  if (isValidURL(str)) return str
  else if (isValidURL(`https://${str}`)) return `https://${str}`
  return false
}

export const makeValidFileName = fileName =>
  fileName.endsWith('.url') ? fileName : fileName + '.url'

export const makeHumanReadableFileName = fileName =>
  fileName.endsWith('.url') ? fileName.slice(0, -4) : fileName

export const checkAndSaveShortcut = async ({
  fileName,
  url,
  isEditing,
  onSave,
  onClose,
  showAlert,
  t
}) => {
  if (!fileName || !url) {
    showAlert({ message: t('shortcut-dialog.needs-info'), severity: 'error' })
    return
  }

  const validFileName = makeValidFileName(fileName)

  const validURL = makeValidUrl(url)

  if (!validURL) {
    showAlert({
      message: t('shortcut-dialog.url-bad-format'),
      severity: 'error'
    })
    return
  }
  try {
    // Because we do not know if the onSave is async or sync and we want to mutualize error catching
    // we need to always await onSave
    await onSave(validFileName, validURL)

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
