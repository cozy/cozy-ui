```jsx
import List from 'cozy-ui/transpiled/react/List'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import { FileTypeFolder, Icon } from '@linagora/twake-icons'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [{ disabledGutters: false, doubleGutters: false }]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => {
    const gutters = variant.disabledGutters ? 'disabled' : variant.doubleGutters ? 'double' : 'default'
    const props = { gutters }

    return (
      <>
        <List subheader={<ListSubheader {...props}>This is the subheader</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <Icon icon={FileTypeFolder} size={32} />
            </ListItemIcon>
            <ListItemText primary="I'm a primary text"/>
          </ListItem>
        </List>
      </>
    )
  }}
</Variants>
