import PropTypes from 'prop-types'

export default {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  actionsLayout: PropTypes.oneOf(['row', 'column']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'S', 'M', 'L'])
}
