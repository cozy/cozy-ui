import React from 'react'

import { render } from '@testing-library/react'

import PushClientButton from '.'

jest.mock('../../Icons/DeviceLaptop', () => () => (
  <div data-testid="device-laptop" />
))

describe('PushClientButton', () => {
  it('should use DeviceLaptop if icon prop is not defined', async () => {
    const { getByTestId } = render(<PushClientButton label="label" href="#" />)

    expect(getByTestId(/device-laptop/)).toBeInTheDocument()
  })

  it('should accept a custom icon', async () => {
    const CustomIcon = () => <div data-testid="custom-icon" />
    const { getByTestId } = render(
      <PushClientButton label="label" href="#" icon={CustomIcon} />
    )

    expect(getByTestId(/custom-icon/)).toBeInTheDocument()
  })
})
