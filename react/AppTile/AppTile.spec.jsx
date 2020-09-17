'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import en from '../AppSections/locales/en.json'
import I18n from '../I18n'

import AppTile from './index'

const appMock = {
  slug: 'test',
  editor: 'cozy',
  namePrefix: 'Cozy',
  developer: {
    name: 'Cozy'
  },
  icon: '<svg></svg>',
  name: 'Test',
  version: '3.0.3',
  onClick: jest.fn()
}

const appMock2 = {
  slug: 'test2',
  editor: '',
  developer: {
    name: 'Naming me'
  },
  icon: '<svg></svg>',
  name: 'Test2',
  version: '3.0.3-beta7483',
  installedAppLink: 'test2.cozy.mock',
  installed: true,
  onClick: jest.fn()
}

const Wrapper = props => {
  return (
    <I18n dictRequire={() => en} lang="en">
      <AppTile {...props} />
    </I18n>
  )
}

describe('AppTile component', () => {
  it('should render correctly an app', () => {
    const component = shallow(
      <Wrapper {...appMock} app={appMock} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render correctly an app without developer property', () => {
    const appMockWithoutDevelopper = Object.assign({}, appMock)
    delete appMockWithoutDevelopper.developer
    const component = shallow(
      <Wrapper {...appMockWithoutDevelopper} app={appMockWithoutDevelopper} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render correctly an app in maintenance', () => {
    const appInMaintenance = Object.assign({}, appMock2, {
      maintenance: { maintenance_options: {} }
    })
    const component = shallow(
      <Wrapper {...appInMaintenance} app={appInMaintenance} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render correctly an app with iconToLoad (icon being fetching)', () => {
    const appIconToLoad = Object.assign({}, appMock2, {
      iconToLoad: true
    })
    const component = shallow(
      <Wrapper {...appIconToLoad} app={appIconToLoad} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render correctly an app with iconToLoad if isMobile', () => {
    const appIconToLoad = Object.assign({}, appMock2, {
      iconToLoad: true
    })
    const component = shallow(
      <Wrapper {...appIconToLoad} app={appIconToLoad} isMobile />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render correctly an installed app', () => {
    const component = shallow(
      <Wrapper {...appMock2} app={appMock2} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render correctly an installed app without icon provided', () => {
    const appMockWithoutIcon = Object.assign({}, appMock, { icon: '' })
    const component = shallow(
      <Wrapper {...appMockWithoutIcon} app={appMockWithoutIcon} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })
})
