import React from 'react'
import ListItem from '../../ListItem'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDeprecatedComponent = createDepreciationLogger()

const DeprecatedComponent = props => {
  logDeprecatedComponent(
    'ListItem is now exported from the cozy-ui ListItem folder. Please change the import path to "cozy-ui/transpiled/react/ListItem"'
  )

  return <ListItem {...props} />
}

export default DeprecatedComponent
