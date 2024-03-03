import testFromStyleguidist from '../test/testFromStyleguidist'
import path from 'path'

// Popper does not work well inside of jest as it heavily relies on DOM APIs (see https://github.com/popperjs/popper-core/issues/478).
jest.mock('@material-ui/core/Popper', () => {
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
testComponent('Buttons')
testComponent('Card')
testComponent('Checkbox')
testComponent('Chips')
testComponent('ContactsList')
testComponent('ContactsListModal')
testComponent('DateMonthPicker')
testComponent('DropdownText')
testComponent('Dialog') // Prints error: Functions are not valid as a React child
testComponent('Empty')
// testComponent('Field') // fuzzy test, need to investigate why
testComponent('Hero')
testComponent('HistoryRow')
// testComponent('Icon') // fuzzy test, need to investigate why
// testComponent('IconButton') // fuzzy test, need to investigate why
testComponent('IconStack')
testComponent('InputGroup')
testComponent('Label')
testComponent('Labs/CollectionField')
testComponent('ListItemText')
testComponent('OrderedList')
testComponent('Paper')
testComponent('PasswordExample')
testComponent('PieChart')
testComponent('Progress')
testComponent('ProgressionBanner')
testComponent('Radios')
testComponent('SelectBox')
testComponent('Sidebar')
testComponent('Spinner')
testComponent('Switch')
testComponent('Textarea')
testComponent('UnorderedList')
testComponent('Wizard')
