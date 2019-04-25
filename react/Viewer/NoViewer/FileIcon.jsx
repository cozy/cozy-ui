import React from 'react'
import Icon from '../../Icon'

const FileIcon = ({ type }) => {
  let icon

  switch (type) {
    case 'bin':
      icon = 'file-type-bin'
      break
    case 'code':
      icon = 'file-type-code'
      break
    case 'spreadsheet':
      icon = 'file-type-spreadsheet'
      break
    case 'slide':
      icon = 'file-type-slide'
      break
    case 'text':
      icon = 'file-type-text'
      break
    case 'zip':
      icon = 'file-type-zip'
      break
    case 'pdf':
      icon = 'file-type-pdf'
      break
    default:
      icon = 'file-type-files'
      break
  }

  return <Icon icon={icon} width={160} height={140} />
}

export default FileIcon
