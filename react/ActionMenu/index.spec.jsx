import React from 'react'
import { mount } from 'enzyme'

import ActionMenu, { ActionMenuItem } from './'

describe('ActionMenu', () => {
  let createRangeBackup

  beforeAll(() => {
    createRangeBackup = global.document.createRange
    global.document.createRange = jest.fn(() => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document
      }
    }))
  })

  afterAll(() => {
    global.document.createRange = createRangeBackup
  })

  it('should support null children', () => {
    const comp = mount(
      <ActionMenu onClose={jest.fn()}>
        <ActionMenuItem>Item 1</ActionMenuItem>
        {null}
      </ActionMenu>
    )
    expect(
      comp
        .find(ActionMenuItem)
        .parent()
        .getElement()
    ).toMatchSnapshot()
  })
})
