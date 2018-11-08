import testFromStyleguidist from './testFromStyleguidist'
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

testComponent('MuiCozyTheme/Buttons')
testComponent('MuiCozyTheme/Menus')
testComponent('ActionMenu')
testComponent('Avatar')
testComponent('Badge')
testComponent('Button')
testComponent('ButtonAction')
testComponent('Checkbox')
testComponent('Field')
testComponent('Hero')
testComponent('Icon')
testComponent('Label')
testComponent('ListItemText')
testComponent('Menu')
testComponent('Radio')
testComponent('SelectBox')
testComponent('Sidebar')
testComponent('Spinner')
testComponent('Text')
testComponent('Textarea')
testComponent('Toggle')
