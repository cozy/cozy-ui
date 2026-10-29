import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'

import MemberRoleMenu from './MemberRoleMenu'
import DemoProvider from '../providers/DemoProvider'

const viewer = { value: 'viewer', label: 'Viewer' }
const editor = { value: 'editor', label: 'Editor' }

describe('MemberRoleMenu', () => {
  let createRangeBackup

  beforeAll(() => {
    createRangeBackup = global.document.createRange
    global.document.createRange = jest.fn(() => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: { nodeName: 'BODY', ownerDocument: document }
    }))
  })

  afterAll(() => {
    global.document.createRange = createRangeBackup
  })

  const setup = roles => {
    const onChange = jest.fn()
    render(
      <DemoProvider>
        <MemberRoleMenu
          member={{ id: 'bob', name: 'Bob' }}
          value="editor"
          roles={roles}
          onChange={onChange}
        />
      </DemoProvider>
    )
    return { onChange }
  }

  it('does not change the role when the current one is picked', () => {
    const { onChange } = setup([viewer, editor])

    fireEvent.click(screen.getByRole('button', { name: 'Editor' }))
    fireEvent.click(screen.getByRole('menuitem', { name: 'Editor' }))

    expect(onChange).not.toHaveBeenCalled()
  })
})
