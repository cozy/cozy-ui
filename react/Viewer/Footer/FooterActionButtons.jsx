import { cloneElement } from 'react'
import PropTypes from 'prop-types'

import { mapToAllChildren } from './helpers'

const FooterActionButtons = ({ children, file }) => {
  if (!children) return null

  return mapToAllChildren(children, child => cloneElement(child, { file }))
}

FooterActionButtons.displayName = 'FooterActionButtons'

FooterActionButtons.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  file: PropTypes.object
}

export default FooterActionButtons
