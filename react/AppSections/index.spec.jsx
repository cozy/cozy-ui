'use strict'

/* eslint-env jest */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { Sections } from './Sections'
import en from './locales/en.json'
import { I18nContext } from '../jestLib/I18n'
import mockApps from '../mocks/apps'
import DemoProvider from '../providers/DemoProvider'

const i18nContext = I18nContext({ locale: en })
const tMock = i18nContext.t

describe('AppsSection component', () => {
  it('should be rendered correctly with apps list, subtitle and onAppClick', () => {
    const mockOnAppClick = jest.fn()
    render(
      <DemoProvider>
        <Sections
          t={tMock}
          lang="en"
          subtitle="Test Apps"
          apps={mockApps}
          allApps={mockApps}
          onAppClick={mockOnAppClick}
          error={null}
          location={{ search: '' }}
        />
      </DemoProvider>
    )

    expect(screen.queryByText('Cozy Collect')).toBeInTheDocument()
    expect(screen.queryByText('Cozy Drive')).toBeInTheDocument()
    expect(screen.queryByText('DevOnly')).toBeInTheDocument()
  })

  it('should render correctly render message if error provided', () => {
    const mockOnAppClick = jest.fn()
    render(
      <DemoProvider>
        <Sections
          t={tMock}
          lang="en"
          subtitle="Test Apps"
          apps={mockApps}
          allApps={mockApps}
          onAppClick={mockOnAppClick}
          error={new Error('This is a test error')}
          location={{ search: '' }}
        />
      </DemoProvider>
    )

    expect(screen.queryByText('This is a test error')).toBeInTheDocument()
  })

  it('should not render dropdown filter on mobile if nav=false flag provided', () => {
    const mockOnAppClick = jest.fn()
    render(
      <DemoProvider>
        <Sections
          t={tMock}
          lang="en"
          subtitle="Test Apps"
          apps={mockApps}
          allApps={mockApps}
          onAppClick={mockOnAppClick}
          breakpoints={{ isMobile: true }}
          hasNav={false}
        />
      </DemoProvider>
    )

    expect(screen.queryByText('All categories')).not.toBeInTheDocument()
  })

  it('should not render dropdown filter on tablet if nav=false flag provided', () => {
    const mockOnAppClick = jest.fn()
    render(
      <DemoProvider>
        <Sections
          t={tMock}
          lang="en"
          subtitle="Test Apps"
          apps={mockApps}
          allApps={mockApps}
          onAppClick={mockOnAppClick}
          breakpoints={{ isTablet: true }}
          hasNav={false}
        />
      </DemoProvider>
    )

    expect(screen.queryByText('All categories')).not.toBeInTheDocument()
  })

  it('should render dropdown filter on mobile if no nav=false flag provided', () => {
    const mockOnAppClick = jest.fn()
    render(
      <DemoProvider>
        <Sections
          t={tMock}
          lang="en"
          subtitle="Test Apps"
          apps={mockApps}
          allApps={mockApps}
          onAppClick={mockOnAppClick}
          breakpoints={{ isMobile: true }}
        />
      </DemoProvider>
    )

    expect(screen.queryByText('All categories')).toBeInTheDocument()
  })

  it('should render dropdown filter on tablet if no nav=false flag provided', () => {
    const mockOnAppClick = jest.fn()
    render(
      <DemoProvider>
        <Sections
          t={tMock}
          lang="en"
          subtitle="Test Apps"
          apps={mockApps}
          allApps={mockApps}
          onAppClick={mockOnAppClick}
          breakpoints={{ isTablet: true }}
        />
      </DemoProvider>
    )

    expect(screen.queryByText('All categories')).toBeInTheDocument()
  })
})
