import React from 'react'

import Icon from '../Icon'
import RightIcon from '../Icons/Right'
import ListItemText from '../ListItemText'
import Divider from '../Divider'
import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
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

        {item.children && item.children.length > 0 && (
          <ListItemIcon>
            <Icon icon={RightIcon} />
          </ListItemIcon>
        )}

        {radioPosition === 'right' &&
          !(item.children && item.children.length > 0) && (
            <ListItemIcon>
              <Radio
                readOnly
                edge="end"
                name={item.title}
                value={item.title}
                checked={!!isSelected}
              />
            </ListItemIcon>
          )}
      </ListItem>
      <Divider />
    </>
  )
}

export default ItemRow
