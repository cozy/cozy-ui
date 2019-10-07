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
import ActionMenu from '../react/ActionMenu'
import Alerter from '../react/Alerter'
import AppTitle from '../react/AppTitle'
import Avatar from '../react/Avatar'
import Badge from '../react/Badge'
import BarButton from '../react/BarButton'
import Button from '../react/Button'
import ButtonAction from '../react/ButtonAction'
import ButtonClient from '../react/PushClientButton'
import BannerClient from '../react/PushClientBanner'
import Checkbox from '../react/Checkbox'
import Card from '../react/Card'
import InlineCard from '../react/InlineCard'
import Empty from '../react/Empty'
import Field from '../react/Field'
import Hero from '../react/Hero'
import I18n from '../react/I18n'
import Icon from '../react/Icon'
import Infos from '../react/Infos'
import Input from '../react/Input'
import InputGroup from '../react/InputGroup'
import IntentHeader from '../react/IntentHeader'
import IntentIframe from '../react/IntentIframe'
import IntentModal from '../react/IntentModal'
import IntentOpener from '../react/IntentOpener'
import Label from '../react/Label'
import ListItemText from '../react/ListItemText'
import Media from '../react/Media'
import Menu from '../react/Menu'
import MidEllipsis from '../react/MidEllipsis'
import Modal from '../react/Modal'
import Nav from '../react/Nav'
import Overlay from '../react/Overlay'
import Panel from '../react/Panel'
import Radio from '../react/Radio'
import SelectBox from '../react/SelectBox'
import SelectionBar from '../react/SelectionBar'
import Sidebar from '../react/Sidebar'
import Spinner from '../react/Spinner'
import Tabs from '../react/Tabs'
import Text from '../react/Text'
import Textarea from '../react/Textarea'
import Toggle from '../react/Toggle'
import * as content from '../docs/fixtures/content'

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
      'content',
      'ActionMenu',
      'Alerter',
      'AppTitle',
      'Avatar',
      'Badge',
      'BarButton',
      'Button',
      'ButtonAction',
      'ButtonClient',
      'BannerClient',
      'Card',
      'InlineCard',
      'Checkbox',
      'Empty',
      'Field',
      'Hero',
      'I18n',
      'Icon',
      'Infos',
      'Input',
      'InputGroup',
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
      'isTesting',
      'state',
      'setState',
      `const React = require("react");
      ` + a
    ).bind(
      null,
      require,
      content,
      ActionMenu,
      Alerter,
      AppTitle,
      Avatar,
      Badge,
      BarButton,
      Button,
      ButtonAction,
      ButtonClient,
      BannerClient,
      Card,
      InlineCard,
      Checkbox,
      Empty,
      Field,
      Hero,
      I18n,
      Icon,
      Infos,
      Input,
      InputGroup,
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
      Toggle,
      () => true
    )

  const options = {
    context: {
      config: {
        compilerConfig: {
          objectAssign: 'Object.assign'
        }
      },
      codeRevision: 1337
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
      codes.forEach(code => {
        const root = mount(
          <Preview code={code.content} evalInContext={evalInContext} />,
          options
        )
        requestAnimationFrame(() => {
          root.update()
          rendered.push(pretty(root.html()))
          doneCounter++
          if (doneCounter === codes.length) {
            finish()
          }
        })
      })
    })
  })
}

export default testFromStyleguidist
