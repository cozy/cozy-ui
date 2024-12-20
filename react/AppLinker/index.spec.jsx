import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import AppLinker from '.'

jest.useFakeTimers()

const setup = ({ app, onAppSwitch }) => {
  return {
    user: userEvent.setup({ delay: null }),
    ...render(
      <AppLinker onAppSwitch={onAppSwitch} href="https://fake.link" app={app}>
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
  let spyConsoleError, appSwitchMock

  beforeEach(() => {
    spyConsoleError = jest.spyOn(console, 'error')
    spyConsoleError.mockImplementation(message => {
      if (message.lastIndexOf('Warning: Failed prop type:') === 0) {
        throw new Error(message)
      }
    })
    appSwitchMock = jest.fn()
  })

  afterEach(() => {
    spyConsoleError.mockRestore()
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
