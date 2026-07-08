```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import List from 'cozy-ui/transpiled/react/List'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
import { Comment, Dots, Icon, Pen, People, Right, Trash } from '@linagora/twake-icons'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
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
              <Icon icon={Comment} size={iconSize} />
            </ListItemIcon>
            {variant.multipleLeftIcons && (
              <>
                <ListItemIcon>
                  <Icon icon={People} size={iconSize} />
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
                  <Icon icon={Right} size={iconSize} />
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
                  <Icon icon={Pen} />
                </IconButton>
                <IconButton>
                  <Icon icon={Trash} />
                </IconButton>
                <IconButton>
                  <Icon icon={Dots} />
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
