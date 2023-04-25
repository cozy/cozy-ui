import React from 'react'

import Icon from '../Icon'
import RightIcon from '../Icons/Right'
import ListItemText from '../ListItemText'
import Divider from '../MuiCozyTheme/Divider'
import ListItem from '../MuiCozyTheme/ListItem'
import ListItemIcon from '../MuiCozyTheme/ListItemIcon'
import Radio from '../Radios'
import useBreakpoints from '../hooks/useBreakpoints'

const ItemRow = ({ item, onClick, isSelected, radioPosition }) => {
  const { isDesktop } = useBreakpoints()
  return (
    <>
      <ListItem
        gutters={isDesktop ? 'double' : 'default'}
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

        {item.children && item.children.length > 0 && <Icon icon={RightIcon} />}

        {radioPosition === 'right' &&
          !(item.children && item.children.length > 0) && (
            <Radio
              readOnly
              edge="end"
              name={item.title}
              value={item.title}
              checked={!!isSelected}
            />
          )}
      </ListItem>
      <Divider />
    </>
  )
}

export default ItemRow
