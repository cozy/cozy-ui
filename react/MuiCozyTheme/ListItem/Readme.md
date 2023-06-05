```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import CommentIcon from 'cozy-ui/transpiled/react/Icons/Comment'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots"
import PenIcon from "cozy-ui/transpiled/react/Icons/Pen"
import TrashIcon from "cozy-ui/transpiled/react/Icons/Trash"
import Radio from 'cozy-ui/transpiled/react/Radios'
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'

const initialVariants = [{
  dense: false,
  longText: false,
  disabledGutters: false,
  doubleGutters: false,
  small: false,
  large: false,
  bigIcons: false,
  smallIcons: false,
  multipleLeftIcons: false,
  multipleRightIcons: false,
  withActions: false,
  ellipsis: true
}]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => {
    const gutters = variant.disabledGutters ? 'disabled' : variant.doubleGutters ? 'double' : 'default'
    const size = variant.small ? 'small' : variant.large ? 'large' : 'medium'
    const listItemProps = { gutters, size, ellipsis: variant.ellipsis }

    const iconSize = variant.smallIcons ? 8 : variant.bigIcons ? 32 : 16
    const text = variant.longText ? content.ada.short : "I'm a primary text"

    return (
      <>
        <List dense={variant.dense} subheader={<ListSubheader>Section 1</ListSubheader>}>
          <ListItem {...listItemProps} button>
            <ListItemIcon>
              <Icon icon={CommentIcon} size={iconSize} />
            </ListItemIcon>
            {variant.multipleLeftIcons && (
              <>
                <ListItemIcon>
                  <Icon icon={PeopleIcon} size={iconSize} />
                </ListItemIcon>
                <ListItemIcon>
                  <Radio />
                </ListItemIcon>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
              </>
            )}
            <ListItemText primary={text} />
            {variant.multipleRightIcons && (
              <>
                <ListItemIcon>
                  <Icon icon={RightIcon} size={iconSize} />
                </ListItemIcon>
                <ListItemIcon>
                  <Radio />
                </ListItemIcon>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
              </>
            )}
            {variant.withActions && (
              <ListItemSecondaryAction>
                <IconButton>
                  <Icon icon={PenIcon} />
                </IconButton>
                <IconButton>
                  <Icon icon={TrashIcon} />
                </IconButton>
                <IconButton>
                  <Icon icon={DotsIcon} />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        </List>
      </>
    )
  }}
</Variants>
```
