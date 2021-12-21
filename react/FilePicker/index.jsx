import React, { useState, memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { FixedDialog } from '../CozyDialogs'
import FilePickerHeader from './FilePickerHeader'
import FilePickerFooter from './FilePickerFooter'
import FilePickerBody from './FilePickerBody'
import useBreakpoints from '../hooks/useBreakpoints'

/**
 * @param {string} fileType - Defines the file types that should be accepted ("file" and/or "folder"), separated by commas
 * @returns {{ file: boolean, folder: boolean }}
 */
const getFileTypesAccepted = fileType => {
  // If accept is falsy, set default to file
  const acceptedFileType = fileType
    ? fileType.replaceAll(' ', '').split(',')
    : ['file']

  return {
    file: acceptedFileType.includes('file'),
    folder: acceptedFileType.includes('folder')
  }
}

const useStyles = makeStyles(() => ({
  paper: {
    height: '100%'
  }
}))

export const ROOT_DIR_ID = 'io.cozy.files.root-dir'

const FilePicker = ({ onClose, onChange, accept, multiple }) => {
  const { isMobile } = useBreakpoints()
  const classes = useStyles()
  const [folderId, setFolderId] = useState(ROOT_DIR_ID)
  const [filesIdsSelected, setFilesIdsSelected] = useState([])

  const onSelectFileId = fileId => {
    if (!multiple) {
      handleConfirm(null, fileId)
    } else {
      setFilesIdsSelected(fileId)
    }
  }

  const navigateTo = folder => setFolderId(folder.id)

  const handleConfirm = (_, fileId) => {
    onChange(fileId ? fileId : filesIdsSelected)
    onClose()
  }
  const fileTypesAccepted = getFileTypesAccepted(accept)

  return (
    <FixedDialog
      open
      disableGutters
      onClose={isMobile ? undefined : onClose}
      size="large"
      classes={{
        paper: classes.paper
      }}
      title={
        <FilePickerHeader
          navigateTo={navigateTo}
          folderId={folderId}
          onClose={onClose}
        />
      }
      content={
        <FilePickerBody
          navigateTo={navigateTo}
          onSelectFileId={onSelectFileId}
          filesIdsSelected={filesIdsSelected}
          folderId={folderId}
          fileTypesAccepted={fileTypesAccepted}
          multiple={multiple}
        />
      }
      actions={
        multiple ? (
          <FilePickerFooter
            onClose={onClose}
            onConfirm={handleConfirm}
            disabledConfirm={filesIdsSelected.length === 0}
          />
        ) : null
      }
    />
  )
}

FilePicker.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool
}

FilePicker.defaultProps = {
  accept: 'file',
  multiple: false
}

export default memo(FilePicker)
