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

  it('should support auto-closing the menu', () => {
    const closeMenu = jest.fn()
    const menuAction1 = jest.fn()
    const menuAction2 = jest.fn()
    const menuActionStoppingPropagation = e => {
      e.stopPropagation()
      menuAction2()
    }

    const comp = mount(
      <ActionMenu onClose={closeMenu} autoclose>
        <ActionMenuItem onClick={menuAction1}>Item 1</ActionMenuItem>
        <ActionMenuItem onClick={menuActionStoppingPropagation}>
          Item 2
        </ActionMenuItem>
      </ActionMenu>
    )

    comp
      .find(ActionMenuItem)
      .at(1)
      .simulate('click')
    expect(menuAction2).toHaveBeenCalled()
    expect(closeMenu).not.toHaveBeenCalled()
    comp
      .find(ActionMenuItem)
      .at(0)
      .simulate('click')
    expect(menuAction1).toHaveBeenCalled()
    expect(closeMenu).toHaveBeenCalled()
  })
})
