import testFromStyleguidist from './testFromStyleguidist'
import path from 'path'

const r = subpath => m => {
  if (m.indexOf('.') === 0) {
    return require('./' + path.join(subpath, m))
  } else {
    return require(m)
  }
}

const testComponent = ComponentName => {
  testFromStyleguidist(
    ComponentName, __dirname + `/${ComponentName}/Readme.md`, r(ComponentName))
}

testComponent('Avatar')
testComponent('ActionMenu')
testComponent('Button')
testComponent('Label')
testComponent('Toggle')
testComponent('Hero')
