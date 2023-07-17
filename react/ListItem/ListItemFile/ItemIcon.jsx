import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { isNote } from 'cozy-client/dist/models/file'

import Icon from '../../Icon'
import FiletypeTextIcon from '../../Icons/FileTypeText'
import FiletypeNoteIcon from '../../Icons/FileTypeNote'
import FileImageLoader from '../../FileImageLoader'
import Thumbnail from '../../Thumbnail'
import Skeleton from '../../Skeleton'

const ItemIcon = ({ icon, file }) => {
  const client = useClient()

  if (icon) return icon

  return (
    <FileImageLoader
      client={client}
      file={file}
      linkType="tiny"
      render={src => {
        return (
          <Thumbnail>
            {src ? (
              <img src={src} alt="" />
            ) : (
              <Skeleton variant="rect" animation="wave" />
            )}
          </Thumbnail>
        )
      }}
      renderFallback={() => (
        <Thumbnail>
          <Icon icon={isNote(file) ? FiletypeNoteIcon : FiletypeTextIcon} />
        </Thumbnail>
      )}
    />
  )
}

ItemIcon.propTypes = {
  icon: PropTypes.node,
  file: PropTypes.object
}

export default ItemIcon
