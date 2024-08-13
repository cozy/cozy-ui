import '@testing-library/jest-dom/extend-expect'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.mount = mount
global.shallow = shallow

const isDeprecatedLifecycleWarning = (msg, componentName) => {
  return (
    msg &&
    msg.includes &&
    msg.includes('has been renamed, and is not recommended for use') &&
    msg.includes(componentName)
  )
}

const ignoreOnConditions = (originalWarn, ignoreConditions) => {
  return function(...args) {
    const msg = args[0]
    if (ignoreConditions.some(condition => condition(msg))) {
      return
    }
    originalWarn.apply(this, args)
  }
}

const makeDeprecatedLifecycleMatcher = componentName => msg =>
  isDeprecatedLifecycleWarning(msg, componentName)

const ignoredWarnings = {
  I18nLifecycle: {
    reason: 'Preact compatibility',
    matcher: makeDeprecatedLifecycleMatcher('I18n')
  },
  ReactSwipableViewLifecycle: {
    reason: 'External lib',
    matcher: makeDeprecatedLifecycleMatcher('ReactSwipableView')
  },
  AutosizeInputLifecycle: {
    reason: 'External lib',
    matcher: makeDeprecatedLifecycleMatcher('AutosizeInput')
  },
  ModalContentLifecycle: {
    reason: 'Preact compatibility',
    matcher: makeDeprecatedLifecycleMatcher('ModalContent')
  },
  ModalAriaLabel: {
    reason: 'Dont know',
    matcher: msg =>
      msg &&
      msg.includes &&
      msg.includes('aria-label') &&
      msg.includes('If your modal')
  }
}

// Ignore warnings that we think are not problematic, see
// https://github.com/cozy/cozy-ui/issues/1318
console.warn = ignoreOnConditions(
  console.warn,
  Object.values(ignoredWarnings).map(x => x.matcher)
)
