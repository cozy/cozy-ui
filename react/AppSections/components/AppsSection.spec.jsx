'use strict'

/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'

import { CozyProvider } from 'cozy-client'
import { I18nContext } from '../../jestLib/I18n'
import { AppsSection } from './AppsSection'
import AppTile from './AppTile'

import mockApps from '../../mocks/apps'
import en from '../locales/en'
import { I18n } from '../../I18n'

const i18nContext = I18nContext({ locale: en })
const tMock = i18nContext.t

describe('AppsSection component', () => {
  let component
  const client = {}
  const setup = ({ onAppClick }) => {
    component = mount(
      <CozyProvider client={client}>
        <I18n lang="en" dictRequire={() => en}>
          <AppsSection
            t={tMock}
            lang="en"
            subtitle={<h3>Test Apps</h3>}
            appsList={mockApps}
            onAppClick={onAppClick}
          />
        </I18n>
      </CozyProvider>
    ).find(AppsSection)
  }

  it('should be rendered correctly with apps list, subtitle', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })
    expect(component.find('h3').map(x => x.text())).toMatchSnapshot()
    expect(component.find('h4').map(x => x.text())).toMatchSnapshot()
    expect(component.find('p').map(x => x.text())).toMatchSnapshot()
  })

  it('should run provided onAppClick on AppTile click event', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })
    expect(component.find(AppTile).length).toBe(mockApps.length)
    const appItem = component.find(AppTile).at(0)
    appItem.simulate('click')
    expect(mockOnAppClick.mock.calls.length).toBe(1)
    expect(mockOnAppClick.mock.calls[0][0]).toBe('konnector-bouilligue')
  })
})
