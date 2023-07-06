import React from 'react'
import ListItemIcon from '../../ListItemIcon'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDeprecatedComponent = createDepreciationLogger()

const DeprecatedComponent = props => {
  logDeprecatedComponent(
    'ListItemIcon is now exported from the cozy-ui ListItemIcon folder. Please change the import path to "cozy-ui/transpiled/react/ListItemIcon"'
  )

  return <ListItemIcon {...props} />
}

export default DeprecatedComponent
