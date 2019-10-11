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
testComponent('Empty')
testComponent('Field')
testComponent('Hero')
testComponent('Icon')
testComponent('Infos')
testComponent('InlineCard')
testComponent('InputGroup')
testComponent('Label')
testComponent('ListItemText')
testComponent('Menu')
testComponent('MuiCozyTheme/Buttons')
testComponent('MuiCozyTheme/ExpansionPanel')
testComponent('MuiCozyTheme/List')
testComponent('MuiCozyTheme/Menus')
testComponent('MuiCozyTheme/Grid')
testComponent('Radio')
testComponent('SelectBox')
testComponent('Sidebar')
testComponent('Spinner')
testComponent('Tabs')
testComponent('Text')
testComponent('Textarea')
testComponent('Toggle')
