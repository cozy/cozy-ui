import React from 'react'
import Divider from '../../Divider'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDeprecatedDivider = createDepreciationLogger()

const DeprecatedDivider = props => {
  logDeprecatedDivider(
    'Divider is now exported from the cozy-ui Divider folder. Please change the import path to "cozy-ui/transpiled/react/divider"'
  )

  return <Divider {...props} />
}

export default DeprecatedDivider
