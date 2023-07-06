import React from 'react'
import List from '../../List'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDeprecatedComponent = createDepreciationLogger()

const DeprecatedComponent = props => {
  logDeprecatedComponent(
    'List is now exported from the cozy-ui List folder. Please change the import path to "cozy-ui/transpiled/react/List"'
  )

  return <List {...props} />
}

export default DeprecatedComponent
