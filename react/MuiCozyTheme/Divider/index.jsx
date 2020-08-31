import React from 'react'
import Divider from '@material-ui/core/Divider'

export default Divider

export const CardDivider = () => {
  // To circumvent a theme problem, we have to remove the margins
  // https://github.com/cozy/cozy-ui/issues/1534 */
  return <Divider className="u-ml-0 u-maw-100" />
}
