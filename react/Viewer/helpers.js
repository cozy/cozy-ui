import { isMobile as isMobileDevice } from 'cozy-device-helper'

import ImageViewer from './ImageViewer'
import AudioViewer from './AudioViewer'
import VideoViewer from './VideoViewer'
import PdfJsViewer from './PdfJsViewer'
import TextViewer from './TextViewer'
import PdfMobileViewer from './PdfMobileViewer'
import NoViewer from './NoViewer'
import ShortcutViewer from './ShortcutViewer'
import OnlyOfficeViewer from './OnlyOfficeViewer'

// TODO : should be in file model of cozy-client
export const isPlainText = (mimeType = '', fileName = '') => {
  return mimeType ? /^text\//.test(mimeType) : /\.(txt|md)$/.test(fileName)
}

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
