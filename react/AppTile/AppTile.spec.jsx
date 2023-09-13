'use strict'

/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import CozyClient, { CozyProvider } from 'cozy-client'

import en from '../AppSections/locales/en.json'
import I18n from '../providers/I18n'

import AppTile from '.'

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

const client = new CozyClient({})
const Wrapper = props => {
  return (
    <CozyProvider client={client}>
      <I18n dictRequire={() => en} lang="en">
        <AppTile {...props} />
      </I18n>
    </CozyProvider>
  )
}

describe('AppTile component', () => {
  it('should render correctly an app', () => {
    const root = render(<Wrapper {...appMock} app={appMock} />)
    expect(root.getByText('Cozy Test')).toBeTruthy()
    expect(root.getByText('By Cozy')).toBeTruthy()
  })

  it('should render correctly an app without developer property', () => {
    const appMockWithoutDevelopper = Object.assign({}, appMock)
    delete appMockWithoutDevelopper.developer
    const root = render(
      <Wrapper {...appMockWithoutDevelopper} app={appMockWithoutDevelopper} />
    )
    expect(root.getByText('Cozy Test')).toBeTruthy()
    expect(root.queryByText('By Cozy')).toBeFalsy()
  })

  it('should render correctly an app in maintenance', () => {
    const appInMaintenance = Object.assign({}, appMock2, {
      maintenance: { maintenance_options: {} }
    })
    const setup = ({ displaySpecificMaintenanceStyle }) =>
      render(
        <Wrapper
          {...appInMaintenance}
          app={appInMaintenance}
          displaySpecificMaintenanceStyle={displaySpecificMaintenanceStyle}
        />
      )
    const root = setup({ displaySpecificMaintenanceStyle: false })
    expect(root.getByText('Test2')).toBeTruthy()
    expect(root.getByText('By Naming me')).toBeTruthy()
    expect(root.getByText('In maintenance')).toBeTruthy()
    expect(root.queryByTestId('icon-maintenance')).toBeNull()

    const rootWithIcon = setup({ displaySpecificMaintenanceStyle: true })
    expect(rootWithIcon.getByTestId('icon-maintenance')).toBeTruthy()
  })

  it('should render correctly an installed app', () => {
    const root = render(<Wrapper {...appMock2} app={appMock2} />)
    expect(root.getByText('Installed')).toBeTruthy()
  })

  it('should render correctly an installed app without icon provided', () => {
    const appMockWithoutIcon = Object.assign({}, appMock, {
      icon: 'https://hello.svg'
    })
    const root = render(
      <Wrapper
        {...appMockWithoutIcon}
        app={appMockWithoutIcon}
        alt="Alternative text"
      />
    )
    expect(root.getByText('Cozy Test')).toBeTruthy()
    expect(root.getByText('By Cozy')).toBeTruthy()
  })

  it('should render correctly an installed app without icon provided', () => {
    const appMockWithoutIcon = Object.assign({}, appMock, { icon: '' })
    const root = render(
      <Wrapper {...appMockWithoutIcon} app={appMockWithoutIcon} />
    )
    expect(root.queryByRole('progressbar')).toBeFalsy()
  })
})
