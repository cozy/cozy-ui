import PropTypes from 'prop-types'

export default {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  open: PropTypes.bool.isRequired,
  disableTitleAutoPadding: PropTypes.bool,
  background: PropTypes.string,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  actionsLayout: PropTypes.oneOf(['row', 'column']),
  onClose: PropTypes.func,
  onBack: PropTypes.func
}
