import React from 'react'

import Icon from '../../Icon'
import FileTypeBinIcon from '../../Icons/FileTypeBin'
import FileTypeCodeIcon from '../../Icons/FileTypeCode'
import FileTypeSheetIcon from '../../Icons/FileTypeSheet'
import FileTypeSlideIcon from '../../Icons/FileTypeSlide'
import FileTypeTextIcon from '../../Icons/FileTypeText'
import FileTypeZipIcon from '../../Icons/FileTypeZip'
import FileTypePdfIcon from '../../Icons/FileTypePdf'
import FileTypeFilesIcon from '../../Icons/FileTypeFiles'

const FileIcon = ({ type }) => {
  let icon

  switch (type) {
    case 'bin':
      icon = FileTypeBinIcon
      break
    case 'code':
      icon = FileTypeCodeIcon
      break
    case 'spreadsheet':
      icon = FileTypeSheetIcon
      break
    case 'slide':
      icon = FileTypeSlideIcon
      break
    case 'text':
      icon = FileTypeTextIcon
      break
    case 'zip':
      icon = FileTypeZipIcon
      break
    case 'pdf':
      icon = FileTypePdfIcon
      break
    default:
      icon = FileTypeFilesIcon
      break
  }

  return <Icon icon={icon} width={160} height={140} />
}

export default FileIcon
