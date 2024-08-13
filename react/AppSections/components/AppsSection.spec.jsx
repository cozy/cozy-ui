'use strict'

/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'

import { CozyProvider } from 'cozy-client'

import mockApps from '../../mocks/apps'
import en from '../locales/en'
import { I18nContext } from '../../jestLib/I18n'
import Tile, { TileTitle, TileSubtitle, TileFooter } from '../../Tile'
import { BreakpointsProvider } from '../../providers/Breakpoints'
import { I18n } from '../../providers/I18n'

import { AppsSection } from './AppsSection'

const i18nContext = I18nContext({ locale: en })
const tMock = i18nContext.t

describe('AppsSection component', () => {
  let component
  const client = {}
  const setup = ({ onAppClick }) => {
    component = mount(
      <CozyProvider client={client}>
        <BreakpointsProvider>
          <I18n lang="en" dictRequire={() => en}>
            <AppsSection
              t={tMock}
              lang="en"
              subtitle={<h3>Test Apps</h3>}
              appsList={mockApps}
              onAppClick={onAppClick}
            />
          </I18n>
        </BreakpointsProvider>
      </CozyProvider>
    ).find(AppsSection)
  }

  it('should be rendered correctly with apps list, subtitle', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })
    expect(
      component.find(Tile).map(x => {
        const developer = x.find(TileSubtitle)
        const status = x.find(TileFooter)
        return {
          title: x.find(TileTitle).text(),
          developer: developer.length ? developer.text() : null,
          status: status.length ? status.text() : null
        }
      })
    ).toMatchSnapshot()
  })

  it('should run provided onAppClick on AppTile click event', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })
    expect(component.find(Tile).length).toBe(mockApps.length)
    const appItem = component.find(Tile).at(0)
    appItem.simulate('click')
    expect(mockOnAppClick.mock.calls.length).toBe(1)
    expect(mockOnAppClick.mock.calls[0][0]).toBe('konnector-bouilligue')
  })
})
