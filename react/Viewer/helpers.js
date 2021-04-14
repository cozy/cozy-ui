import { isMobile as isMobileDevice } from 'cozy-device-helper'

import ImageViewer from './ImageViewer'
import AudioViewer from './AudioViewer'
import VideoViewer from './VideoViewer'
import PdfJsViewer from './PdfJsViewer'
import TextViewer from './TextViewer'
import PdfMobileViewer from './PdfMobileViewer'
import NoViewer from './NoViewer'
import ShortcutViewer from './ShortcutViewer'

export const isPlainText = (mimeType = '', fileName = '') => {
  return mimeType ? /^text\//.test(mimeType) : /\.(txt|md)$/.test(fileName)
}

export const getViewerComponentName = (file, isDesktop) => {
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
      return isPlainText(file.mime, file.name) ? TextViewer : NoViewer
    default:
      return NoViewer
  }
}
