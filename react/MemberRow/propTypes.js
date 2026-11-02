import PropTypes from 'prop-types'

const rolePropType = PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
})

export const rolesPropType = PropTypes.arrayOf(rolePropType)

export const memberPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  subtitle: PropTypes.node,
  avatarUrl: PropTypes.string,
  initials: PropTypes.string,
  color: PropTypes.string,
  isGroup: PropTypes.bool,
  isOwner: PropTypes.bool,
  isCurrentUser: PropTypes.bool,
  role: PropTypes.string,
  roles: rolesPropType,
  canChangeRole: PropTypes.bool,
  canRemove: PropTypes.bool,
  removeIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  removeLabel: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  isPending: PropTypes.bool,
  onClick: PropTypes.func,
  data: PropTypes.any
})
