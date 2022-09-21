import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { isMobile as isMobileDevice } from 'cozy-device-helper'
import { FileDoctype } from '../../proptypes'
import withBreakpoints from '../../helpers/withBreakpoints'

import { isPlainText } from '../helpers'
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
  breakpoints: { isDesktop }
}) => {
  const isOnlyOfficeEnabled = onlyOfficeProps && onlyOfficeProps.isEnabled
  const onlyOfficeOpener = onlyOfficeProps && onlyOfficeProps.opener

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
  onSwipe: PropTypes.func
}

export default withBreakpoints()(ViewerByFile)
