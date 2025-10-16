const MAX_FILE_SIZE = 5 * 1024 * 1024

export const handleUploadAvatar = async ({
  event,
  t,
  fileInputRef,
  avatarStatus,
  onUpload,
  setAvatarStatus,
  setAvatarTimestamp,
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

  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
  if (!ALLOWED_TYPES.includes(file.type)) {
    showAlert({
      message: t('EditBadge.upload.file-type'),
      severity: 'error'
    })
    return
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 30000)

  const previousAvatarStatus = avatarStatus
  setAvatarStatus('LOADING')

  try {
    await onUpload(file)
    clearTimeout(timeoutId)

    const newTimestamp = Date.now()
    setAvatarStatus('PRESENT')
    setAvatarTimestamp(newTimestamp)
    showAlert({
      message: t('EditBadge.upload.success'),
      severity: 'success'
    })
  } catch (error) {
    clearTimeout(timeoutId)
    setAvatarStatus(previousAvatarStatus)
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

export const handleDeleteAvatar = async ({
  t,
  avatarStatus,
  onDelete,
  setShowMenu,
  setAvatarStatus,
  setAvatarTimestamp,
  showAlert
}) => {
  setShowMenu(false)

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 30000)
  const previousAvatarStatus = avatarStatus
  setAvatarStatus('LOADING')

  try {
    await onDelete()
    clearTimeout(timeoutId)

    const checkTimestamp = Date.now()

    setAvatarStatus('ABSENT')
    setAvatarTimestamp(checkTimestamp)
    showAlert({
      message: t('EditBadge.delete.success'),
      severity: 'success'
    })
  } catch (error) {
    clearTimeout(timeoutId)
    setAvatarStatus(previousAvatarStatus)
    showAlert({
      message: t('EditBadge.delete.error'),
      severity: 'error'
    })
  }
}
