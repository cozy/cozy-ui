const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

export const handleUpload = async ({
  event,
  t,
  fileInputRef,
  status,
  onUpload,
  setStatus,
  setTimestamp,
  setShowMenu,
  showAlert
}) => {
  const file = event.target.files[0]
  if (!file) return

  if (file.size > MAX_FILE_SIZE) {
    showAlert({
      message: t('EditBadge.upload.file-size'),
      severity: 'error'
    })
    return
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    showAlert({
      message: t('EditBadge.upload.file-type'),
      severity: 'error'
    })
    return
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 30000)

  const previouStatus = status
  setStatus('LOADING')

  try {
    await onUpload(file)
    clearTimeout(timeoutId)

    const newTimestamp = Date.now()
    setStatus('PRESENT')
    setTimestamp(newTimestamp)
    showAlert({
      message: t('EditBadge.upload.success'),
      severity: 'success'
    })
  } catch (error) {
    clearTimeout(timeoutId)
    setStatus(previouStatus)
    showAlert({
      message: t('EditBadge.upload.error'),
      severity: 'error'
    })
  } finally {
    setShowMenu(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
}

export const handleDelete = async ({
  t,
  status,
  onDelete,
  setShowMenu,
  setStatus,
  setTimestamp,
  showAlert
}) => {
  setShowMenu(false)

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 30000)
  const previousStatus = status
  setStatus('LOADING')

  try {
    await onDelete()
    clearTimeout(timeoutId)

    const checkTimestamp = Date.now()

    setStatus('ABSENT')
    setTimestamp(checkTimestamp)
    showAlert({
      message: t('EditBadge.delete.success'),
      severity: 'success'
    })
  } catch (error) {
    clearTimeout(timeoutId)
    setStatus(previousStatus)
    showAlert({
      message: t('EditBadge.delete.error'),
      severity: 'error'
    })
  }
}
