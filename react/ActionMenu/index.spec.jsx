import React from 'react'
import { mount } from 'enzyme'

import ActionMenu, { ActionMenuItem } from './'
import { fixPopperTesting } from '../Popper/testing'

describe('ActionMenu', () => {
  fixPopperTesting()

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
