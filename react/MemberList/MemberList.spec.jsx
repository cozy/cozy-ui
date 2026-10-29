import { render, screen } from '@testing-library/react'
import React from 'react'

import MemberList from '.'
import DemoProvider from '../providers/DemoProvider'

const roles = [
  { value: 'viewer', label: 'Viewer' },
  { value: 'editor', label: 'Editor' }
]

const owner = { id: 'owner', name: 'Alice', isOwner: true }
const bob = { id: 'bob', name: 'Bob', role: 'editor' }

describe('MemberList', () => {
  const setup = (members, props) =>
    render(
      <DemoProvider>
        <MemberList
          {...props}
          members={members}
          roles={roles}
          onRoleChange={jest.fn()}
          onRemove={jest.fn()}
        />
      </DemoProvider>
    )

  it('shows the owner first', () => {
    setup([bob, owner])

    const rows = screen.getAllByRole('listitem')
    expect(rows[0]).toHaveTextContent('Alice')
    expect(rows[1]).toHaveTextContent('Bob')
  })

  it('shows the empty state when there is no member but the owner', () => {
    setup([owner])

    expect(screen.queryByText('No one has been added yet')).toBeInTheDocument()
  })

  it('does not show the empty state when there are members', () => {
    setup([owner, bob])

    expect(screen.queryByText('No one has been added yet')).toBe(null)
  })
})
