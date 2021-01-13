import PropTypes from 'prop-types'

export default {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  actionsLayout: PropTypes.oneOf(['row', 'column']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}
