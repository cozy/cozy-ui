import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { useAppLinkWithStoreFallback, useClient } from 'cozy-client'

import useBreakpoints from '../../hooks/useBreakpoints'
import { useI18n } from '../../I18n'
import useViewerSnackbar from '../snackbar/ViewerSnackbarProvider'
import { getCurrentModel } from '../helpers'
import ActionMenuMobile from './ActionMenuMobile'
import ActionMenuDesktop from './ActionMenuDesktop'

const mespapiersAppSlug = 'mespapiers'
const checkEditableAttribute = name => {
  const isNotEditableAttributes = ['datetime', 'qualification', 'contact']
  return !isNotEditableAttributes.includes(name)
}

const ActionMenuWrapper = forwardRef(({ onClose, file, optionFile }, ref) => {
  const { name, value } = optionFile
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const { showViewerSnackbar } = useViewerSnackbar()
  const client = useClient()

  const isEditableAttribute = checkEditableAttribute(name)
  const currentAppSlug = client.getInstanceOptions().app.slug
  const currentModel = getCurrentModel(name)

  const currentURL = `/paper/${window.location.href.split('/paper/')[1]}`
  const path = `#/paper/edit/${currentModel}/${file._id}?${
    currentModel === 'information' ? `metadata=${name}&` : ''
  }backgroundPath=${currentURL}`

  const { fetchStatus, url } = useAppLinkWithStoreFallback(
    mespapiersAppSlug,
    client,
    path
  )
  const isAppLinkLoaded = fetchStatus === 'loaded'

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(value)
      showViewerSnackbar(
        'secondary',
        t(`Viewer.snackbar.copiedToClipboard.success`)
      )
    } else {
      showViewerSnackbar('error', t(`Viewer.snackbar.copiedToClipboard.error`))
    }
    onClose()
  }

  const handleEdit = cb => {
    if (isAppLinkLoaded) {
      onClose()
      cb && cb()
    }
  }

  // Currently, the editing option should not be present on the "drive" or "photos" applications.
  const isInDriveOrPhotosApp = ['drive', 'photos'].includes(currentAppSlug)

  if (isMobile) {
    return (
      <ActionMenuMobile
        onClose={onClose}
        isEditable={!isInDriveOrPhotosApp && isEditableAttribute}
        actions={{ handleCopy, handleEdit }}
        appLink={url}
        appSlug={mespapiersAppSlug}
      />
    )
  }

  return (
    <ActionMenuDesktop
      ref={ref}
      onClose={onClose}
      isEditable={!isInDriveOrPhotosApp && isEditableAttribute}
      actions={{ handleCopy, handleEdit }}
      appLink={url}
      appSlug={mespapiersAppSlug}
    />
  )
})
ActionMenuWrapper.displayName = 'ActionMenuWrapper'

ActionMenuWrapper.propTypes = {
  onClose: PropTypes.func,
  fileId: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
}

export default ActionMenuWrapper
