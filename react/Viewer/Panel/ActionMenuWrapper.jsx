import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import copy from 'copy-text-to-clipboard'

import { useAppLinkWithStoreFallback, useClient } from 'cozy-client'

import useBreakpoints from '../../hooks/useBreakpoints'
import { useI18n } from '../../I18n'
import useViewerSnackbar from '../providers/ViewerSnackbarProvider'
import {
  buildEditAttributePath,
  isEditableAttribute,
  getCurrentModel
} from '../helpers'
import useActionMenuContext from '../providers/ActionMenuProvider'
import ActionMenuMobile from './ActionMenuMobile'
import ActionMenuDesktop from './ActionMenuDesktop'

const mespapiersAppSlug = 'mespapiers'

const ActionMenuWrapper = forwardRef(({ onClose, file, optionFile }, ref) => {
  const { name, value } = optionFile
  const editPathByModelProps = useActionMenuContext()
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const { showViewerSnackbar } = useViewerSnackbar()
  const client = useClient()

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
    const hasCopied = copy(value)
    if (hasCopied) {
      showViewerSnackbar(
        'success',
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
        isEditable={Boolean(editPath) && isEditableAttribute(name, file)}
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
      isEditable={Boolean(editPath) && isEditableAttribute(name, file)}
      actions={{ handleCopy, handleEdit }}
      appLink={url}
      appSlug={mespapiersAppSlug}
    />
  )
})
ActionMenuWrapper.displayName = 'ActionMenuWrapper'

ActionMenuWrapper.propTypes = {
  onClose: PropTypes.func,
  file: PropTypes.object,
  optionFile: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })
}

export default ActionMenuWrapper
