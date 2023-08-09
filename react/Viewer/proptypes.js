import PropTypes from 'prop-types'

export const toolbarPropsPropType = {
  /** Whether to show the toolbar or not. Note that the built-in close button is in the toolbar */
  showToolbar: PropTypes.bool,
  /** Whether to show close button in toolbar */
  showClose: PropTypes.bool,
  /** React reference of the toolbar node */
  toolbarRef: PropTypes.object,
  /** Whether to show file path below his name */
  showFilePath: PropTypes.bool
}
