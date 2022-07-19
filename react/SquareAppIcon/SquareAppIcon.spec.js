/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import CozyClient, { CozyProvider } from 'cozy-client'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import Icon from 'cozy-ui/transpiled/react/Icon'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'

import SquareAppIcon from './index'

const appMock = {
  slug: 'test',
  name: 'Test'
}

const client = new CozyClient({})
const Wrapper = props => {
  return (
    <CozyProvider client={client}>
      <MuiCozyTheme>
        <SquareAppIcon {...props} />
      </MuiCozyTheme>
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

  it('should render correctly an app in shortcut state', () => {
    const root = render(<Wrapper variant="shortcut" name="shortcut" />)
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })

  it('should display icon-content an app with icon content in shortcut state', () => {
    const { queryByTestId } = render(
      <Wrapper
        variant="shortcut"
        name="shortcut"
        IconContent={<Icon data-testid="icon-content" icon={CozyIcon} />}
      />
    )
    expect(queryByTestId('icon-content')).toBeTruthy()
  })

  it('should render correctly an app with custom content', () => {
    const root = render(
      <Wrapper name="custom icon" IconContent={<Icon icon={CozyIcon} />} />
    )
    expect(root.getByTestId('square-app-icon')).toMatchSnapshot()
  })
})
