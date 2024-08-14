import PropTypes from 'prop-types'
import React from 'react'

import { useClient } from 'cozy-client'
import { isNote } from 'cozy-client/dist/models/file'

import FileImageLoader from '../../FileImageLoader'
import Icon from '../../Icon'
import FiletypeNoteIcon from '../../Icons/FileTypeNote'
import FiletypeTextIcon from '../../Icons/FileTypeText'
import Skeleton from '../../Skeleton'
import Thumbnail from '../../Thumbnail'

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
