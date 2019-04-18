import React from 'react'
import renderer from 'react-test-renderer'

import InitialsAvatar from './InitialsAvatar'

describe('InitialsAvatar', () => {
  it('should use the initial of the name (string)', () => {
    const name = 'kevon.willms@example.com'
    const component = renderer.create(
      <InitialsAvatar name={name} size="small" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should use the initials of the name (object)', () => {
    const name = {
      givenName: 'Kevon',
      familyName: 'Willms'
    }
    const component = renderer.create(
      <InitialsAvatar name={name} size="small" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
