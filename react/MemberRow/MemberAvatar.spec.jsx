import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import MemberAvatar from './MemberAvatar'
import DemoProvider from '../providers/DemoProvider'

describe('MemberAvatar', () => {
  const setup = (initials, avatarUrl) =>
    render(
      <DemoProvider>
        <MemberAvatar initials={initials} avatarUrl={avatarUrl} />
      </DemoProvider>
    )

  it('falls back to the initials when the avatar image fails to load', () => {
    const { container, getByText } = setup(
      'B',
      'http://cozy.example.com/sharings/123/recipients/0/avatar?v=owner'
    )

    fireEvent.error(container.querySelector('img'))

    expect(container.querySelector('img')).toBeNull()
    expect(getByText('B')).toBeTruthy()
  })
})
