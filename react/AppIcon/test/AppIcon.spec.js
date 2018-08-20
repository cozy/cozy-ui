'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import AppIcon from '../'

describe('AppIcon component', () => {
  const app = {
    links: {
      icon: 'apps/test/icon'
    }
  }

  const successFetchIcon = jest.fn().mockResolvedValue('data://test-url')

  it(`renders default when fetch error occurs`, () => {
    const failureFetchIcon = jest.fn().mockImplementation(() => {
      throw new Error('Mocked error')
    })
    const component = shallow(
      <AppIcon app={app} fetchIcon={failureFetchIcon} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it(`renders as loading`, () => {
    const component = shallow(
      <AppIcon app={app} fetchIcon={successFetchIcon} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('renders app icon after fetching', done => {
    const wrapper = shallow(<AppIcon app={app} fetchIcon={successFetchIcon} />)

    setTimeout(() => {
      wrapper.update()
      const component = wrapper.getElement()
      expect(component).toMatchSnapshot()
      done()
    }, 10)
  })
})
