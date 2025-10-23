import { render } from '@testing-library/react'
import React from 'react'

import Field from '.'

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
      render(
        <Field
          label="mock field"
          type="select"
          value={{}}
          onChange={() => {}}
        />
      )
    ).not.toThrowError()
    expect(() =>
      render(
        <Field
          label="mock field"
          type="select"
          value="wrong"
          onChange={() => {}}
        />
      )
    ).toThrowError()
  })

  it('should expect string type value for all types but select', () => {
    expect(() =>
      render(
        <Field
          label="mock field"
          type="text"
          value="good"
          onChange={() => {}}
        />
      )
    ).not.toThrowError()
    expect(() =>
      render(
        <Field label="mock field" type="text" value={{}} onChange={() => {}} />
      )
    ).toThrowError()
  })
})
