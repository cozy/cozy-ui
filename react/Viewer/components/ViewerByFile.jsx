import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { isMobile as isMobileDevice } from 'cozy-device-helper'
import { models } from 'cozy-client'

import { FileDoctype } from '../../proptypes'
import withBreakpoints from '../../helpers/withBreakpoints'

import ImageViewer from '../ViewersByFile/ImageViewer'
import AudioViewer from '../ViewersByFile/AudioViewer'
import VideoViewer from '../ViewersByFile/VideoViewer'
import PdfJsViewer from '../ViewersByFile/PdfJsViewer'
import TextViewer from '../ViewersByFile/TextViewer'
import PdfMobileViewer from '../ViewersByFile/PdfMobileViewer'
import NoViewer from '../NoViewer'
import ShortcutViewer from '../ViewersByFile/ShortcutViewer'
import OnlyOfficeViewer from '../ViewersByFile/OnlyOfficeViewer'

import { useEncrypted } from '../providers/EncryptedProvider'

import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDepecratedOnlyOfficeProps = createDepreciationLogger()

const { isPlainText } = models.file

export const getViewerComponentName = ({
  file,
  isDesktop,
  isOnlyOfficeEnabled
}) => {
  switch (file.class) {
    case 'shortcut':
      return ShortcutViewer
    case 'image':
      return ImageViewer
    case 'audio':
      return AudioViewer
    case 'video':
      return isMobileDevice() ? NoViewer : VideoViewer
    case 'pdf':
      return isDesktop ? PdfJsViewer : PdfMobileViewer
    case 'text':
      return isPlainText(file.mime, file.name)
        ? TextViewer
        : isOnlyOfficeEnabled
        ? OnlyOfficeViewer
        : NoViewer
    case 'slide':
      return isOnlyOfficeEnabled ? OnlyOfficeViewer : NoViewer
    case 'spreadsheet':
      return isOnlyOfficeEnabled ? OnlyOfficeViewer : NoViewer
    default:
      return NoViewer
  }
}

const ViewerByFile = ({
  file,
  onClose,
  renderFallbackExtraContent,
  gestures,
  gesturesRef,
  onSwipe,
  onlyOfficeProps,
  breakpoints: { isDesktop },
  componentsProps
}) => {
  if (onlyOfficeProps) {
    logDepecratedOnlyOfficeProps(
      'onlyOfficeProps in Viewer is deprecated. Please use componentsProps.OnlyOfficeViewer instead.'
    )
  }

  const isOnlyOfficeEnabled =
    componentsProps?.OnlyOfficeViewer?.isEnabled || onlyOfficeProps?.isEnabled
  const onlyOfficeOpener =
    componentsProps?.OnlyOfficeViewer?.opener || onlyOfficeProps?.opener

  const { url } = useEncrypted()

  const ComponentName = useMemo(
    () =>
      getViewerComponentName({
        file,
        isDesktop,
        isOnlyOfficeEnabled
      }),
    [file, isDesktop, isOnlyOfficeEnabled]
  )

  return (
    <ComponentName
      file={file}
      url={url}
      onClose={onClose}
      renderFallbackExtraContent={renderFallbackExtraContent}
      gestures={gestures}
      gesturesRef={gesturesRef}
      onSwipe={onSwipe}
      onlyOfficeOpener={onlyOfficeOpener}
    />
  )
}

ViewerByFile.propTypes = {
  file: FileDoctype.isRequired,
  onClose: PropTypes.func.isRequired,
  renderFallbackExtraContent: PropTypes.func,
  onlyOfficeProps: PropTypes.object,
  // gestures, gesturesRef and onSwipe are got from ViewerControls
  gestures: PropTypes.object,
  gesturesRef: PropTypes.object,
  onSwipe: PropTypes.func,
  componentsProps: PropTypes.object
}

export default withBreakpoints()(ViewerByFile)
