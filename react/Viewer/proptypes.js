import PropTypes from 'prop-types'

export const toolbarPropsPropType = {
  /** Whether to show the toolbar or not. Note that the built-in close button is in the toolbar. */
  showToolbar: PropTypes.bool,
  /** Whether to show close button in toolbar */
  showClose: PropTypes.bool,
  toolbarRef: PropTypes.object
}
