import React from 'react'

import Input from '.'

describe('Input component', () => {
  it('should support number type', () => {
    const component = shallow(
      <Input type="number" value="42" onChange={jest.fn()} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })
})
