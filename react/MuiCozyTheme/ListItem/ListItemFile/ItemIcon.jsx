import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'

import Icon from '../../../Icon'
import FileImageLoader from '../../../FileImageLoader'
import CardMedia from '../../../CardMedia'
import FiletypeTextIcon from '../../../Icons/FileTypeText'

const ItemIcon = ({ icon, file }) => {
  const client = useClient()

  if (icon) return icon

  return (
    <FileImageLoader
      client={client}
      file={file}
      linkType="tiny"
      render={src => {
        return <CardMedia component="img" width={32} height={32} image={src} />
      }}
      renderFallback={() => <Icon icon={FiletypeTextIcon} size={32} />}
    />
  )
}

ItemIcon.propTypes = {
  icon: PropTypes.node,
  file: PropTypes.object
}

export default ItemIcon
