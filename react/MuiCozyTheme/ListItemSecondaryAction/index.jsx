import React from 'react'
import ListItemSecondaryAction from '../../ListItemSecondaryAction'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDeprecatedComponent = createDepreciationLogger()

const DeprecatedComponent = props => {
  logDeprecatedComponent(
    'ListItemSecondaryAction is now exported from the cozy-ui ListItemSecondaryAction folder. Please change the import path to "cozy-ui/transpiled/react/ListItemSecondaryAction"'
  )

  return <ListItemSecondaryAction {...props} />
}

export default DeprecatedComponent
