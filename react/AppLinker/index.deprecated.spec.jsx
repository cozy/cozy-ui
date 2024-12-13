/**
 * Those tests are here to test previous AppLinker implementation base on
 * `slug` prop.
 * Now that AppLinkers implements `app` prop and uses `app.slug`, the old
 * `slug` prop is deprecated
 * Those tests should be kept until `slug` prop is completely removed
 */

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import AppLinker from '.'

jest.useFakeTimers()

const setup = ({ app, onAppSwitch }) => {
  return {
    user: userEvent.setup({ delay: null }),
    ...render(
      <AppLinker
        onAppSwitch={onAppSwitch}
        slug={app.slug}
        href="https://fake.link"
      >
        {({ onClick, href, name }) => (
          <div>
            <a href={href} onClick={onClick}>
              Open {name}
            </a>
          </div>
        )}
      </AppLinker>
    )
  }
}

const app = {
  slug: 'drive',
  name: 'Drive'
}

describe('app icon', () => {
  let spyConsoleError, spyConsoleWarn, appSwitchMock

  beforeEach(() => {
    spyConsoleError = jest.spyOn(console, 'error')
    spyConsoleError.mockImplementation(() => {})
    spyConsoleWarn = jest.spyOn(console, 'warn')
    spyConsoleWarn.mockImplementation(() => {})
    appSwitchMock = jest.fn()
  })

  afterEach(() => {
    spyConsoleError.mockRestore()
    spyConsoleWarn.mockRestore()
    jest.restoreAllMocks()
  })

  it('should render correctly', () => {
    const { container } = setup({ app })
    expect(container).toMatchSnapshot()
  })

  it('should work for web -> web', async () => {
    const { container, user } = setup({ app, onAppSwitch: appSwitchMock })
    const link = container.querySelector('a')
    await user.click(link)
    expect(appSwitchMock).not.toHaveBeenCalled()
  })
})
