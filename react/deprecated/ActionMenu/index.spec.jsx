import React from 'react'
import { mount } from 'enzyme'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { fixPopperTesting } from '../../Popper/testing'
import { BreakpointsProvider } from '../../providers/Breakpoints'
import Typography from '../../Typography'
import Icon from '../../Icon'
import FileIcon from '../../Icons/File'
import WarningIcon from '../../Icons/Warning'

import ActionMenu, { ActionMenuItem, ActionMenuRadio } from '.'

xdescribe('ActionMenu', () => {
  fixPopperTesting()

  // The update-not-wrapping-in-act warning is disabled for ActionMenuWrapper since
  // we have not found how to remove the "update" happening when mounting the
  // ActionMenu.
  let originalConsoleError = console.error

  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error = function(msg, arg) {
      if (
        msg.includes('An update to %s inside a test was not wrapped in act') &&
        arg == 'ActionMenuWrapper'
      ) {
        return
      } else {
        return originalConsoleError.apply(this, arguments)
      }
    }
  })

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.error = originalConsoleError
  })

  it('should support null children', async () => {
    const comp = mount(
      <BreakpointsProvider>
        <ActionMenu onClose={jest.fn()}>
          <ActionMenuItem>Item 1</ActionMenuItem>
          {null}
        </ActionMenu>
      </BreakpointsProvider>
    )
    // Remove an update was not wrapped in act() warning
    await act(async () => {})
    expect(
      comp
        .find(ActionMenuItem)
        .parent()
        .getElement()
    ).toMatchSnapshot()
  })

  it('should support auto-closing the menu', async () => {
    const closeMenu = jest.fn()
    const menuAction1 = jest.fn()
    const menuAction2 = jest.fn()
    const menuActionStoppingPropagation = e => {
      e.stopPropagation()
      menuAction2()
    }

    const comp = mount(
      <BreakpointsProvider>
        <ActionMenu onClose={closeMenu} autoclose>
          <ActionMenuItem onClick={menuAction1}>Item 1</ActionMenuItem>
          <ActionMenuItem onClick={menuActionStoppingPropagation}>
            Item 2
          </ActionMenuItem>
        </ActionMenu>
      </BreakpointsProvider>
    )

    await act(async () => {
      comp
        .find(ActionMenuItem)
        .at(1)
        .simulate('click')
    })
    expect(menuAction2).toHaveBeenCalled()
    expect(closeMenu).not.toHaveBeenCalled()

    act(() => {
      comp
        .find(ActionMenuItem)
        .at(0)
        .simulate('click')
    })
    expect(menuAction1).toHaveBeenCalled()
    expect(closeMenu).toHaveBeenCalled()
  })

  it('should render as expected', async () => {
    const { container } = render(
      <BreakpointsProvider>
        <ActionMenuItem
          left={<Icon icon={FileIcon} />}
          right={<Icon icon={WarningIcon} color="var(--errorColor)" />}
          onClick={() => alert('click')}
        >
          Item 1 with onclick action
        </ActionMenuItem>
        <ActionMenuItem left={<Icon icon={FileIcon} />}>
          Item 2 with dialog action
        </ActionMenuItem>
        <ActionMenuItem left={<ActionMenuRadio />}>Item 3</ActionMenuItem>
        <ActionMenuItem left={<Icon icon={FileIcon} />}>
          <Typography variant="body1" gutterBottom>
            Item 4
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Descriptive text to elaborate on what item 3 does.
          </Typography>
        </ActionMenuItem>
      </BreakpointsProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
