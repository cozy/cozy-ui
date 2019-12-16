import testFromStyleguidist from '../test/testFromStyleguidist'
import path from 'path'

const makeRequire = subpath => m => {
  if (m.indexOf('.') === 0) {
    return require('./' + path.join(subpath, m))
  } else {
    return require(m)
  }
}

const testComponent = ComponentName => {
  testFromStyleguidist(
    ComponentName,
    path.join(__dirname, ComponentName, 'Readme.md'),
    makeRequire(ComponentName)
  )
}

// Please keep the list sorted
testComponent('ActionMenu')
testComponent('AppTitle')
testComponent('Avatar')
testComponent('Badge')
testComponent('BarButton')
testComponent('Button')
testComponent('ButtonAction')
testComponent('Card')
testComponent('Checkbox')
testComponent('ContactsList')
testComponent('ContactsListModal')
testComponent('DateMonthPicker')
testComponent('Empty')
testComponent('Field')
testComponent('Hero')
testComponent('HistoryRow')
testComponent('Icon')
testComponent('IconStack')
testComponent('Infos')
testComponent('InlineCard')
testComponent('InputGroup')
testComponent('Label')
testComponent('Labs/CollectionField')
testComponent('ListItemText')
testComponent('Media')
testComponent('Menu')
testComponent('NarrowContent')
testComponent('PasswordExample')
testComponent('PercentageBar')
testComponent('PercentageLine')
testComponent('QuotaAlert')
testComponent('Radio')
testComponent('SelectBox')
testComponent('Sidebar')
testComponent('Spinner')
testComponent('Table')
testComponent('Tabs')
testComponent('Text')
testComponent('Textarea')
testComponent('ThresholdBar')
testComponent('Toggle')
testComponent('UnorderedList')
