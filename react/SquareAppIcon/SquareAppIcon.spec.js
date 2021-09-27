/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import CozyClient, { CozyProvider } from 'cozy-client'

import SquareAppIcon from './index'

const appMock = {
  slug: 'test',
  name: 'Test',
}

const client = new CozyClient({})
const Wrapper = (props) => {
  return (
    <CozyProvider client={client}>
      <SquareAppIcon {...props} />
    </CozyProvider>
  )
}

describe('SquareAppIcon component', () => {
  it('should render an app correctly with the given name', () => {
    const root = render(<Wrapper app={appMock} name="modified" />)
    expect(root.getByText('modified')).toBeTruthy()
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })

  it('should render an app correctly with the app name', () => {
    const root = render(<Wrapper app={appMock} />)
    expect(root.getByText('Test')).toBeTruthy()
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })

  it('should render an app with the app slug if no name prop and app is a string', () => {
    const root = render(<Wrapper app="testslug" />)
    expect(root.getByText('testslug')).toBeTruthy()
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })

  it('should render correctly an app in maintenance state', () => {
    const root = render(<Wrapper app={appMock} variant="maintenance" />)
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })

  it('should render correctly an app in ghost state', () => {
    const root = render(<Wrapper app={appMock} variant="ghost" />)
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })

  it('should render correctly an app in error state', () => {
    const root = render(<Wrapper app={appMock} variant="error" />)
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })

  it('should render correctly an app in add state', () => {
    const root = render(<Wrapper variant="add" />)
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })
})
