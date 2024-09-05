import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

import { isPlainText } from 'cozy-client/dist/models/file'
import { isMobile as isMobileDevice } from 'cozy-device-helper'

import withBreakpoints from '../../helpers/withBreakpoints'
import { FileDoctype } from '../../proptypes'
import NoViewer from '../NoViewer'
import AudioViewer from '../ViewersByFile/AudioViewer'
import BlankPaperViewer from '../ViewersByFile/BlankPaperViewer'
import ImageViewer from '../ViewersByFile/ImageViewer'
import OnlyOfficeViewer from '../ViewersByFile/OnlyOfficeViewer'
import PdfJsViewer from '../ViewersByFile/PdfJsViewer'
import PdfMobileViewer from '../ViewersByFile/PdfMobileViewer'
import ShortcutViewer from '../ViewersByFile/ShortcutViewer'
import TextViewer from '../ViewersByFile/TextViewer'
import VideoViewer from '../ViewersByFile/VideoViewer'
import { useEncrypted } from '../providers/EncryptedProvider'

const isBlankPaper = doc => doc.metadata?.paperProps?.isBlank

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
      return isBlankPaper(file)
        ? BlankPaperViewer
        : isDesktop
        ? PdfJsViewer
        : PdfMobileViewer
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

const ViewerByFile = withBreakpoints()(
  ({
    file,
    onClose,
    renderFallbackExtraContent,
    gestures,
    gesturesRef,
    onSwipe,
    breakpoints: { isDesktop },
    componentsProps
  }) => {
    const isOnlyOfficeEnabled = componentsProps?.OnlyOfficeViewer?.isEnabled
    const onlyOfficeOpener = componentsProps?.OnlyOfficeViewer?.opener

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
)

ViewerByFile.propTypes = {
  file: FileDoctype.isRequired,
  onClose: PropTypes.func.isRequired,
  renderFallbackExtraContent: PropTypes.func,
  // gestures, gesturesRef and onSwipe are got from ViewerControls
  gestures: PropTypes.object,
  gesturesRef: PropTypes.object,
  onSwipe: PropTypes.func,
  componentsProps: PropTypes.object
}

ViewerByFile.displayName = 'ViewerByFile'

export default ViewerByFile
