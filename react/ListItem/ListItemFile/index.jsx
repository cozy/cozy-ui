import React from 'react'
import PropTypes from 'prop-types'

import { splitFilename } from 'cozy-client/dist/models/file'

import Filename from '../../Filename'
import FiletypePdfIcon from '../../Icons/FileTypePdf'

import ListItemBase from '../ListItemBase'
import ItemIcon from './ItemIcon'
import PrimaryText from './PrimaryText'
import SecondaryText from './SecondaryText'

const ListItemFile = ({
  file,
  primary,
  secondary,
  icon,
  actions,
  selectProps,
  expandedAttributesProps,
  onClick
}) => {
  const { filename, extension } = splitFilename({
    name: file.name,
    type: 'file'
  })

  return (
    <ListItemBase
      doc={file}
      primary={<PrimaryText primary={primary} file={file} />}
      secondary={<SecondaryText secondary={secondary} file={file} />}
      icon={<ItemIcon icon={icon} file={file} />}
      actions={actions}
      actionMenuComp={{
        Header: (
          <Filename
            icon={FiletypePdfIcon}
            filename={filename}
            extension={extension}
          />
        )
      }}
      selectProps={selectProps}
      expandedAttributesProps={expandedAttributesProps}
      onClick={onClick}
    />
  )
}

ListItemFile.defaultProps = {
  expandedAttributesProps: {
    isExpandedAttributesActive: false
  }
}

ListItemFile.propTypes = {
  file: PropTypes.object,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  icon: PropTypes.node,
  actions: PropTypes.array,
  selectProps: PropTypes.shape({
    isSelectActive: PropTypes.bool,
    isSelected: PropTypes.bool,
    isChecked: PropTypes.bool
  }),
  expandedAttributesProps: PropTypes.shape({
    isExpandedAttributesActive: PropTypes.bool,
    expandedAttributes: PropTypes.array
  }),
  onClick: PropTypes.func
}

export default ListItemFile
