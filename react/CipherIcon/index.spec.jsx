import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CipherIcon from '.'

jest.mock('cozy-client', () => ({
  withClient: Component => {
    const client = {
      getStackClient: () => ({
        getIconURL: ({ type, appData }) => {
          console.log('getIconUrl called with:')
          console.log(type)
          console.log(appData)
        }
      })
    }
    return konnector => (
      <Component client={client} konnector={{ ...konnector }} />
    )
  }
}))

jest.mock('../AppIcon', () => ({ fetchIcon }) => (
  <button data-testid="app-icon" onClick={fetchIcon}></button>
))

describe('CipherIcon', () => {
  it('should provide appData to getIconUrl in order to get icon simply, when oauth not needed', () => {
    // Given
    jest.spyOn(console, 'log').mockImplementation()
    const konnector = {
      name: 'PropTypes.string',
      slug: 'slug',
      links: {
        icon: 'icon url'
      },
      latest_version: {
        version: 'version'
      }
    }
    const { getByTestId } = render(<CipherIcon konnector={konnector} />)

    // When
    fireEvent.click(getByTestId('app-icon'))

    // Then
    expect(console.log).toHaveBeenNthCalledWith(1, 'getIconUrl called with:')
    expect(console.log).toHaveBeenNthCalledWith(2, 'konnector')
    expect(console.log).toHaveBeenNthCalledWith(3, { konnector })
  })
})
