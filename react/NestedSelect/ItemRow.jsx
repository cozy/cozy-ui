import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import RightIcon from '../Icons/Right'
import ListItemText from '../ListItemText'
import Divider from '../Divider'
import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
import Radio from '../Radios'
import useBreakpoints from '../providers/Breakpoints'
import Typography from '../Typography'

const infoStyle = { color: 'var(--secondaryTextColor)' }

const ItemRow = ({
  item,
  onClick,
  isSelected,
  radioPosition,
  isLast,
  ellipsis,
  noDivider
}) => {
  const { isDesktop } = useBreakpoints()

  return (
    <>
      <ListItem
        gutters={isDesktop ? 'double' : 'default'}
        {...(ellipsis === false && { ellipsis: false })}
        button
        onClick={() => onClick(item)}
      >
        {radioPosition === 'left' && (
          <ListItemIcon>
            <Radio
              readOnly
              name={item.title}
              value={item.title}
              checked={!!isSelected}
            />
          </ListItemIcon>
        )}
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.title} secondary={item.description} />

        {item.children && item.children.length > 0 && (
          <ListItemIcon>
            <Icon icon={RightIcon} color="var(--secondaryTextColor)" />
          </ListItemIcon>
        )}

        {radioPosition === 'right' &&
          !(item.children && item.children.length > 0) && (
            <div className="u-flex u-flex-items-center">
              {!!item.info && (
                <Typography style={infoStyle} variant="body2">
                  {item.info}
                </Typography>
              )}
              <ListItemIcon>
                <Radio
                  readOnly
                  edge="end"
                  name={item.title}
                  value={item.title}
                  checked={!!isSelected}
                />
              </ListItemIcon>
            </div>
          )}

        {radioPosition === 'right' && !!item.action && (
          <Divider orientation="vertical" flexItem />
        )}
        {item.action
          ? item.action.Component({ item, ...item.action.props })
          : null}
      </ListItem>
      {noDivider ? null : !isLast && <Divider />}
    </>
  )
}

ItemRow.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  radioPosition: PropTypes.oneOf(['left', 'right']),
  isLast: PropTypes.bool,
  ellipsis: PropTypes.bool,
  noDivider: PropTypes.bool
}

export default ItemRow
