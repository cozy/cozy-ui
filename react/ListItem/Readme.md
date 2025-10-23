```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import List from 'cozy-ui/transpiled/react/List'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
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

### Contextualized items

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import List from 'cozy-ui/transpiled/react/List'
import ListItemByDoc from 'cozy-ui/transpiled/react/ListItem/ListItemByDoc'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Divider from 'cozy-ui/transpiled/react/Divider'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

const mockClient = {
  plugins: {
    realtime: {
      subscribe: () => {},
      unsubscribe: () => {},
      unsubscribeAll: () => {}
    }
  },
  getStackClient: () => ({
    uri: 'https://cozy.io/'
  }),
  getInstanceOptions: () => ({
    subdomain: ''
  })
}

const contacts = [
  {
    _id: 'id01',
    _type: 'io.cozy.contacts',
    displayName: 'John Doe',
    birthday: '25/10/2022',
    email: [{ address: 'johndoe@cozy.cc', primary: true }],
    phone: [{ number: '0102030405', primary: true }]
  },
  {
    _id: 'id02',
    _type: 'io.cozy.contacts',
    displayName: 'Jason Bourne',
    birthday: '01/01/2020',
    email: [{ address: 'jbourne@cozy.cc', primary: true }]
  }
]

const files = [
  {
    _type: 'io.cozy.files',
    name: 'File01.pdf',
    metadata: {
      number: 12345,
      refTaxIncome: '153',
      datetime: '2024-01-11T12:00:00.000Z',
      datetimeLabel: 'expirationDate',
      referencedDate: '2024-01-01T12:00:00.000Z',
      expirationDate: '2024-01-11T12:00:00.000Z',
      issueDate: '2024-01-11T12:00:00.000Z',
      noticePeriod: '30',
      qualification: {
        label: 'driver_license'
      }
    }
  },
  {
    _type: 'io.cozy.files',
    type: 'file',
    name: 'Note01.cozy-note',
    metadata: {
      title: 'note title',
      version: 0
    }
  }
]

;

<DemoProvider client={mockClient}>
  <List>
    <ListItemByDoc
      doc={contacts[0]}
      expandedAttributesProps={{
        isExpandedAttributesActive: true,
        expandedAttributes: ['email', 'birthday']
      }}
      onClick={() => {}}
    />
    <Divider variant="inset" />
    <ListItemByDoc
      doc={files[0]}
      expandedAttributesProps={{
        isExpandedAttributesActive: true,
        expandedAttributes: ['metadata.number']
      }}
      onClick={() => {}}
    />
    <ListItemByDoc
      doc={files[0]}
      expandedAttributesProps={{ isExpandedAttributesActive: true }}
      onClick={() => {}}
    />
    <Divider variant="inset" />
    <ListItemByDoc
      doc={files[1]}
      onClick={() => {}}
    />
  </List>
</DemoProvider>
```
