import React, { useCallback, memo } from 'react'
import PropTypes from 'prop-types'

import { models, useQuery } from 'cozy-client'
import List from '../MuiCozyTheme/List'
import LoadMore from '../LoadMore'

import { buildContentFolderQuery } from './queries'
import FilePickerBodyItem from './FilePickerBodyItem'

const {
  file: { isDirectory, isFile }
} = models

const FilePickerBody = ({
  navigateTo,
  folderId,
  onSelectFileId,
  filesIdsSelected,
  fileTypesAccepted,
  multiple
}) => {
  const contentFolderQuery = buildContentFolderQuery(folderId)
  const {
    data: contentFolder,
    hasMore,
    fetchMore
  } = useQuery(contentFolderQuery.definition, contentFolderQuery.options)

  const onCheck = useCallback(
    fileId => {
      const isChecked = filesIdsSelected.some(
        fileIdSelected => fileIdSelected === fileId
      )
      if (isChecked) {
        onSelectFileId(
          filesIdsSelected.filter(fileIdSelected => fileIdSelected !== fileId)
        )
      } else onSelectFileId(prev => [...prev, fileId])
    },
    [filesIdsSelected, onSelectFileId]
  )

  // When click on checkbox/radio area...
  const handleChoiceClick = useCallback(
    file => () => {
      if (multiple) onCheck(file._id)
      else onSelectFileId(file._id)
    },
    [multiple, onCheck, onSelectFileId]
  )

  // ...when click anywhere on the rest of the line
  const handleListItemClick = useCallback(
    file => () => {
      if (isDirectory(file)) {
        navigateTo(contentFolder.find(f => f._id === file._id))
      }

      if (isFile(file) && fileTypesAccepted.file) {
        if (multiple) onCheck(file._id)
        else onSelectFileId(file._id)
      }
    },
    [
      contentFolder,
      fileTypesAccepted.file,
      multiple,
      navigateTo,
      onCheck,
      onSelectFileId
    ]
  )

  return (
    <List>
      {contentFolder &&
        contentFolder.map((file, idx) => {
          const hasDivider = contentFolder
            ? idx !== contentFolder.length - 1
            : false

          return (
            <FilePickerBodyItem
              key={file._id}
              file={file}
              fileTypesAccepted={fileTypesAccepted}
              multiple={multiple}
              handleChoiceClick={handleChoiceClick}
              handleListItemClick={handleListItemClick}
              onCheck={onCheck}
              filesIdsSelected={filesIdsSelected}
              hasDivider={hasDivider}
            />
          )
        })}
      {hasMore && <LoadMore label={'loadMore'} fetchMore={fetchMore} />}
    </List>
  )
}

FilePickerBody.propTypes = {
  onSelectFileId: PropTypes.func.isRequired,
  filesIdsSelected: PropTypes.arrayOf(PropTypes.string).isRequired,
  folderId: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
  fileTypesAccepted: PropTypes.exact({
    file: PropTypes.bool,
    folder: PropTypes.bool
  })
}

export default memo(FilePickerBody)
