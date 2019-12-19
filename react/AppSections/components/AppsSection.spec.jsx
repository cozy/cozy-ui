'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import { I18nContext } from '../../jestLib/I18n'
import { AppsSection } from './AppsSection'
import SmallAppItem from './SmallAppItem'

import mockApps from '../../mocks/apps'
import en from '../locales/en'
import { I18n } from '../../I18n'

const i18nContext = I18nContext({ locale: en })
const tMock = i18nContext.t

describe('AppsSection component', () => {
  let component
  const setup = ({ onAppClick }) => {
    component = shallow(
      <I18n lang="en" dictRequire={() => en}>
        <AppsSection
          t={tMock}
          lang="en"
          subtitle={<h3>Test Apps</h3>}
          appsList={mockApps}
          onAppClick={onAppClick}
        />
      </I18n>
    )
      .dive()
      .dive()
  }
  it('should be rendered correctly with apps list, subtitle and onAppClick', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })
    expect(component.getElement()).toMatchSnapshot()
  })

  it('should run provided onAppClick on SmallAppItem click event', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })
    expect(component.find(SmallAppItem).length).toBe(mockApps.length)
    const appItem = component
      .find(SmallAppItem)
      .at(0)
      .dive() // shallow on more level on first app item
    appItem.simulate('click')
    expect(mockOnAppClick.mock.calls.length).toBe(1)
    expect(mockOnAppClick.mock.calls[0][0]).toBe('konnector-bouilligue')
  })
})
