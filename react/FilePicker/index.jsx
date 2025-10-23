import PropTypes from 'prop-types'
import React, { useState, memo } from 'react'

import FilePickerBody from './FilePickerBody'
import FilePickerFooter from './FilePickerFooter'
import FilePickerHeader from './FilePickerHeader'
import { FixedDialog } from '../CozyDialogs'
import { getCompliantTypes } from '../helpers/acceptedTypes'
import useBreakpoints from '../providers/Breakpoints'
import { makeStyles } from '../styles'

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
  const [itemsIdsSelected, setItemsIdsSelected] = useState([])

  const onSelectItemId = fileId => {
    if (!multiple) {
      handleConfirm(null, fileId)
    } else {
      setItemsIdsSelected(fileId)
    }
  }

  const navigateTo = folder => setFolderId(folder.id)

  const handleConfirm = (_, fileId) => {
    onChange(fileId ? fileId : itemsIdsSelected)
    onClose()
  }
  const itemTypesAccepted = getCompliantTypes(accept)

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
          onSelectItemId={onSelectItemId}
          itemsIdsSelected={itemsIdsSelected}
          folderId={folderId}
          itemTypesAccepted={itemTypesAccepted}
          multiple={multiple}
        />
      }
      actions={
        multiple ? (
          <FilePickerFooter
            onClose={onClose}
            onConfirm={handleConfirm}
            disabledConfirm={itemsIdsSelected.length === 0}
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
  accept: '',
  multiple: false
}

export default memo(FilePicker)
