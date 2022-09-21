import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { useAppLinkWithStoreFallback, useClient } from 'cozy-client'

import useBreakpoints from '../../hooks/useBreakpoints'
import { useI18n } from '../../I18n'
import useViewerSnackbar from '../snackbar/ViewerSnackbarProvider'
import { buildEditAttributePath, getCurrentModel } from '../helpers'
import useActionMenuContext from './ActionMenuProvider'
import ActionMenuMobile from './ActionMenuMobile'
import ActionMenuDesktop from './ActionMenuDesktop'

const mespapiersAppSlug = 'mespapiers'

const checkEditableAttribute = name => {
  const isNotEditableAttributes = ['datetime', 'qualification']
  return !isNotEditableAttributes.includes(name)
}

const ActionMenuWrapper = forwardRef(({ onClose, optionFile }, ref) => {
  const { name, value } = optionFile
  const editPathByModelProps = useActionMenuContext()
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const { showViewerSnackbar } = useViewerSnackbar()
  const client = useClient()

  const isEditableAttribute = checkEditableAttribute(name)
  const currentModel = getCurrentModel(name)
  const editPath = buildEditAttributePath(
    editPathByModelProps,
    currentModel,
    optionFile.name
  )

  const { fetchStatus, url } = useAppLinkWithStoreFallback(
    mespapiersAppSlug,
    client,
    editPath
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

  if (isMobile) {
    return (
      <ActionMenuMobile
        onClose={onClose}
        isEditable={editPath && isEditableAttribute}
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
      isEditable={editPath && isEditableAttribute}
      actions={{ handleCopy, handleEdit }}
      appLink={url}
      appSlug={mespapiersAppSlug}
    />
  )
})
ActionMenuWrapper.displayName = 'ActionMenuWrapper'

ActionMenuWrapper.propTypes = {
  onClose: PropTypes.func,
  optionFile: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })
}

export default ActionMenuWrapper
