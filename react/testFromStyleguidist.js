import React from 'react'
import Preview from 'react-styleguidist/lib/rsg-components/Preview'
import fs from 'fs'
import chunkify from 'react-styleguidist/loaders/utils/chunkify'
import pretty from 'pretty'

/*
  Styleguidist does some black magic with AST to automatically provide
  components to the code in the README ([examples-loader]).

  We manually do that below by importing each components and binding
  them to the function that executes the README code.

  examples-loader: https://github.com/styleguidist/react-styleguidist/blob/master/loaders/examples-loader.js
 */
import ActionMenu from './ActionMenu'
import Alerter from './Alerter'
import Avatar from './Avatar'
import Badge from './Badge'
import Button from './Button'
import ButtonAction from './ButtonAction'
import Checkbox from './Checkbox'
import Field from './Field'
import Hero from './Hero'
import I18n from './I18n'
import Icon from './Icon'
import Input from './Input'
import IntentHeader from './IntentHeader'
import IntentIframe from './IntentIframe'
import IntentModal from './IntentModal'
import IntentOpener from './IntentOpener'
import Label from './Label'
import ListItemText from './ListItemText'
import Media from './Media'
import Menu from './Menu'
import MidEllipsis from './MidEllipsis'
import Modal from './Modal'
import Nav from './Nav'
import Overlay from './Overlay'
import Panel from './Panel'
import Radio from './Radio'
import SelectBox from './SelectBox'
import SelectionBar from './SelectionBar'
import Sidebar from './Sidebar'
import Spinner from './Spinner'
import Tabs from './Tabs'
import Text from './Text'
import Textarea from './Textarea'
import Toggle from './Toggle'

// Mock error otherwise there are errors with the createStylesheet function
jest.mock('react-styleguidist/lib/rsg-components/PlaygroundError', () => {
  return function(props) {
    return <div>{props.message}</div>
  }
})

const testFromStyleguidist = (name, markdown, require) => {
  const evalInContext = a =>
    // eslint-disable-next-line no-new-func
    new Function(
      'require',
      'ActionMenu',
      'Alerter',
      'Avatar',
      'Badge',
      'Button',
      'ButtonAction',
      'Checkbox',
      'Field',
      'Hero',
      'I18n',
      'Icon',
      'Input',
      'IntentHeader',
      'IntentIframe',
      'IntentModal',
      'IntentOpener',
      'Label',
      'ListItemText',
      'Media',
      'Menu',
      'MidEllipsis',
      'Modal',
      'Nav',
      'Overlay',
      'Panel',
      'Radio',
      'SelectBox',
      'SelectionBar',
      'Sidebar',
      'Spinner',
      'Tabs',
      'Text',
      'Textarea',
      'Toggle',
      'state',
      'setState',
      `const React = require("react");
      ` + a
    ).bind(
      null,
      require,
      ActionMenu,
      Alerter,
      Avatar,
      Badge,
      Button,
      ButtonAction,
      Checkbox,
      Field,
      Hero,
      I18n,
      Icon,
      Input,
      IntentHeader,
      IntentIframe,
      IntentModal,
      IntentOpener,
      Label,
      ListItemText,
      Media,
      Menu,
      MidEllipsis,
      Modal,
      Nav,
      Overlay,
      Panel,
      Radio,
      SelectBox,
      SelectionBar,
      Sidebar,
      Spinner,
      Tabs,
      Text,
      Textarea,
      Toggle
    )

  const options = {
    context: {
      config: {
        compilerConfig: {
          objectAssign: 'Object.assign'
        }
      }
    }
  }

  describe(name, () => {
    it('should render examples', done => {
      let doneCounter = 0
      const Readme = fs.readFileSync(markdown)
      const chunks = chunkify(Readme)
      const codes = chunks.filter(x => x.type === 'code')
      const rendered = []
      const finish = () => {
        rendered.forEach(rendered => {
          expect(rendered).toMatchSnapshot(name)
        })
        done()
      }
      codes.forEach(() => {
        const root = mount(
          <Preview code={codes[0].content} evalInContext={evalInContext} />,
          options
        )
        requestAnimationFrame(() => {
          root.update()
          rendered.push(pretty(root.html()))
          doneCounter++
          if (doneCounter == codes.length) {
            finish()
          }
        })
      })
    })
  })
}

export default testFromStyleguidist
