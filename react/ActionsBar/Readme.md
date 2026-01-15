Use same actions as `<ActionsMenu />`.

### Demo

This demo showcases all ActionsBar features:

* **Selection management**: Add/remove selected documents
* **Color customization**: The `color` prop allows customizing the background color (supports `default`, `inherit`, `primary`, `secondary`, `transparent`, `error`, `warning`, `info`, `success`)
* **Icon customization**: The `IconComponent` prop allows replacing the entire icon component displayed next to the selection count on desktop. It receives no props and should render a complete React component (defaults to `<Icon icon={CheckCircleIcon} />`)

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Buttons from 'cozy-ui/transpiled/react/Buttons'
import ActionsBar from 'cozy-ui/transpiled/react/ActionsBar'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { makeActions, modify, emailTo, download, smsTo, call } from 'cozy-ui/transpiled/react/ActionsMenu/Actions'
import StarIcon from 'cozy-ui/transpiled/react/Icons/Star'
import FlagIcon from 'cozy-ui/transpiled/react/Icons/FlagOutlined'

const doc = {
  _id: 'id01',
  _type: 'io.cozy.contacts',
  phone: [{ number: '0102030405' }],
  email: [{ address: 'johndoe@cozy.cc' }],
}

initialState = {
  selected: isTesting() ? [doc, doc] : [],
  color: 'default',
  icon: 'default'
}

const addSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.push(doc)
    return { selected: arr }
})

const removeSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.pop()
    return { selected: arr }
})

const actions = makeActions([ modify, call, download, smsTo, emailTo ])

const colors = ['default', 'inherit', 'primary', 'secondary', 'error', 'warning', 'info', 'success']

const StarIconComponent = () => <Icon className="u-mr-1" icon={StarIcon} />
const FlagIconComponent = () => <Icon className="u-mr-1" icon={FlagIcon} />

const icons = {
  default: undefined,
  star: StarIconComponent,
  flag: FlagIconComponent
}

;

<DemoProvider>
  <div className="u-mb-1">
    <Typography variant="subtitle1" className="u-mb-half">Selection</Typography>
    <Buttons label="Add a selected document" className="u-mr-1" onClick={addSelected} />
    <Buttons label="Remove a selected document" onClick={removeSelected} />
  </div>

  <div className="u-mb-1">
    <Typography variant="subtitle1" className="u-mb-half">Color</Typography>
    {colors.map(color => (
      <Buttons
        key={color}
        label={color}
        className="u-mr-half u-mb-half"
        variant={state.color === color ? 'primary' : 'secondary'}
        onClick={() => setState({ color })}
      />
    ))}
  </div>

  <div className="u-mb-1">
    <Typography variant="subtitle1" className="u-mb-half">Icon (desktop only)</Typography>
    {Object.keys(icons).map(iconName => (
      <Buttons
        key={iconName}
        label={iconName}
        className="u-mr-half"
        variant={state.icon === iconName ? 'primary' : 'secondary'}
        onClick={() => setState({ icon: iconName })}
      />
    ))}
  </div>

  {state.selected.length > 0 && (
    <ActionsBar
      actions={actions}
      docs={state.selected}
      color={state.color}
      IconComponent={icons[state.icon]}
      onClose={() => setState({selected: []})}
    />
  )}
</DemoProvider>
```
