import React from 'react'
import Field from '.'
import { shallow } from 'enzyme'

describe('Field component', () => {
  beforeEach(() => {
    // by default, proptypes checking just log errors
    jest.spyOn(console, 'error').mockImplementation(message => {
      throw new Error(message)
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  it('should expect object type value for type=select', () => {
    expect(() =>
      shallow(<Field label="mock field" type="select" value={{}} />)
    ).not.toThrowError()
    expect(() =>
      shallow(<Field label="mock field" type="select" value="wrong" />)
    ).toThrowError()
  })

  it('should expect string type value for all types but select', () => {
    expect(() =>
      shallow(<Field label="mock field" type="text" value="good" />)
    ).not.toThrowError()
    expect(() =>
      shallow(<Field label="mock field" type="text" value={{}} />)
    ).toThrowError()
  })
})
