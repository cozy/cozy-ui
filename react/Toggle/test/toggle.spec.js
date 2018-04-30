'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import Toggle from '../'

describe('Toggle component', () => {
  it(`handles correctly onToggle function`, () => {
    const handleOnToggle = jest.fn()
    const component = shallow(
      <Toggle id="mock-toggle-id" onToggle={handleOnToggle} />
    )
    component
      .find('#mock-toggle-id')
      .simulate('change', { target: { checked: true } })
    expect(handleOnToggle.mock.calls.length).toBe(1)
    expect(handleOnToggle.mock.calls[0][0]).toBe(true)
    component
      .find('#mock-toggle-id')
      .simulate('change', { target: { checked: false } })
    expect(handleOnToggle.mock.calls.length).toBe(2)
    expect(handleOnToggle.mock.calls[1][0]).toBe(false)
  })
})
