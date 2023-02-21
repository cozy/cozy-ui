import testFromStyleguidist from '../test/testFromStyleguidist'
import path from 'path'

// Popper does not work well inside of jest as it heavily relies on DOM APIs (see https://github.com/popperjs/popper-core/issues/478).
jest.mock('@mui/material/Popper', () => {
  return ({ children }) => children
})

const makeRequire = subpath => m => {
  if (m.indexOf('.') === 0) {
    return require('./' + path.join(subpath, m))
  } else {
    return require(m)
  }
}

const testComponent = (ComponentName, options) => {
  testFromStyleguidist(
    ComponentName,
    path.join(__dirname, ComponentName, 'Readme.md'),
    makeRequire(ComponentName),
    options
  )
}

// Please keep the list sorted
testComponent('Alert')
testComponent('AppTitle')
testComponent('Avatar')
testComponent('Badge')
testComponent('Banner')
testComponent('BarButton')
testComponent('Button')
testComponent('Buttons')
testComponent('Card')
testComponent('Checkbox')
testComponent('Chips')
testComponent('CompositeRow')
testComponent('ContactsList')
testComponent('ContactsListModal')
testComponent('DateMonthPicker')
testComponent('DropdownText')
testComponent('Dialog') // Prints error: Functions are not valid as a React child
testComponent('Empty')
testComponent('Field')
testComponent('Hero')
testComponent('HistoryRow')
testComponent('Icon')
testComponent('IconButton')
testComponent('IconStack')
testComponent('Infos')
testComponent('InfosCarrousel')
testComponent('InlineCard')
testComponent('InputGroup')
testComponent('Label')
testComponent('Labs/CollectionField')
testComponent('ListItemText')
testComponent('Media')
testComponent('NarrowContent')
testComponent('OrderedList')
testComponent('Paper')
testComponent('PasswordExample')
testComponent('PercentageBar')
testComponent('PercentageLine')
testComponent('PieChart')
testComponent('Progress')
testComponent('ProgressionBanner')
testComponent('QuotaAlert')
testComponent('Radios')
testComponent('SelectBox')
testComponent('Sidebar') // Prints error: test was not wrapped in act()
testComponent('Spinner') // Prints error: test was not wrapped in act()
testComponent('MuiCozyTheme/Switch') // Prints error: test was not wrapped in act()
testComponent('Table') // Prints error: test was not wrapped in act()
testComponent('Textarea') // Prints error: test was not wrapped in act()
testComponent('UnorderedList') // Prints error: test was not wrapped in act()
testComponent('Wizard') // Prints error: test was not wrapped in act()
