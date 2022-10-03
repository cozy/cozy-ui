import React from 'react'
import { withStyles } from '@material-ui/core'

import Icon from '../Icon'
import Radio from '../Radios'
import ListItem from '../MuiCozyTheme/ListItem'
import ListItemText from '../ListItemText'
import ListItemIcon from '../MuiCozyTheme/ListItemIcon'
import useBreakpoints from '../hooks/useBreakpoints'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'

const NestedSelectListItemText = withStyles({
  root: {
    padding: '0rem 0.5rem'
  }
})(ListItemText)

const NestedSelectListRightIcon = withStyles(theme => ({
  root: {
    marginRight: 0,
    color: theme.palette.text.secondary
  }
}))(ListItemIcon)

const primaryTypographyProps = { className: 'u-ellipsis', variant: 'body1' }

const ItemRow = ({ item, onClick, isSelected, radioPosition }) => {
  const { isMobile } = useBreakpoints()
  return (
    <ListItem dense button divider onClick={() => onClick(item)}>
      {radioPosition === 'left' ? (
        <ListItemIcon className="u-mr-0">
          <Radio
            readOnly
            name={item.title}
            value={item.title}
            checked={!!isSelected}
          />
        </ListItemIcon>
      ) : null}
      {item.icon ? (
        <ListItemIcon className={`${isMobile ? 'u-ml-half' : 'u-ml-1'} u-mr-1`}>
          {item.icon}
        </ListItemIcon>
      ) : null}
      <NestedSelectListItemText
        primary={item.title}
        ellipsis
        primaryTypographyProps={primaryTypographyProps}
        secondary={item.description}
        secondaryTypographyProps={{
          variant: 'caption',
          className: 'u-ellipsis'
        }}
      />
      {item.children && item.children.length > 0 ? (
        <NestedSelectListRightIcon>
          <Icon icon={RightIcon} />
        </NestedSelectListRightIcon>
      ) : null}

      {radioPosition === 'right' &&
      !(item.children && item.children.length > 0) ? (
        <NestedSelectListRightIcon>
          <Radio
            readOnly
            name={item.title}
            value={item.title}
            checked={!!isSelected}
          />
        </NestedSelectListRightIcon>
      ) : null}
    </ListItem>
  )
}

export default ItemRow
