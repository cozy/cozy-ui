'use strict'

/* eslint-env jest */

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { AppsSection } from './AppsSection'
import { I18nContext } from '../../jestLib/I18n'
import mockApps from '../../mocks/apps'
import DemoProvider from '../../providers/DemoProvider'
import en from '../locales/en'

const i18nContext = I18nContext({ locale: en })
const tMock = i18nContext.t

describe('AppsSection component', () => {
  const setup = ({ onAppClick }) => {
    render(
      <DemoProvider>
        <AppsSection
          t={tMock}
          lang="en"
          subtitle={<h3>Test Apps</h3>}
          appsList={mockApps}
          onAppClick={onAppClick}
        />
      </DemoProvider>
    )
  }

  it('should be rendered correctly with apps list, subtitle', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })

    mockApps.forEach(app => {
      expect(screen.getByText(app.name, { exact: false })).toBeInTheDocument()
    })
  })

  it('should run provided onAppClick on AppTile click event', () => {
    const mockOnAppClick = jest.fn()
    setup({ onAppClick: mockOnAppClick })

    const bouilligue = screen.getByText('Bouilligue', { exact: false })
    fireEvent.click(bouilligue)
    expect(mockOnAppClick.mock.calls.length).toBe(1)
    expect(mockOnAppClick.mock.calls[0][0]).toBe('konnector-bouilligue')
  })
})
