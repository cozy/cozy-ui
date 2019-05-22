'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import { I18nContext } from '../../jestLib/I18n'
import { AppsSection } from './AppsSection'
import SmallAppItem from './SmallAppItem'

import mockApps from 'ducks/apps/_mockApps'
import en from '../locales/en'

const i18nContext = I18nContext({ locale: en })
const tMock = i18nContext.t

describe('AppsSection component', () => {
  it('should be rendered correctly with apps list, subtitle and onAppClick', () => {
    const mockOnAppClick = jest.fn()
    const component = shallow(
      <AppsSection
        t={tMock}
        lang="en"
        subtitle={<h3>Test Apps</h3>}
        appsList={mockApps}
        onAppClick={mockOnAppClick}
      />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should run provided onAppClick on SmallAppItem click event', () => {
    const mockOnAppClick = jest.fn()
    const component = shallow(
      <AppsSection
        t={tMock}
        lang="en"
        subtitle={<h3>Test Apps</h3>}
        appsList={mockApps}
        onAppClick={mockOnAppClick}
      />
    )
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
