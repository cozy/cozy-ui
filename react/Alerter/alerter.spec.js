'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import Alerter, { Alert } from './'
import Button from '../Button'

describe('Alerter component', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  //
  ;['info', 'success', 'error'].forEach(type => {
    it(`render correctly an ${type} alert`, () => {
      const wrapper = shallow(<Alerter />)
      Alerter[type](`Test ${type} alert`)
      expect(
        wrapper
          .find(Alert)
          .dive()
          .getElement()
      ).toMatchSnapshot()
    })
  })

  it('render button if buttonText provided', () => {
    const wrapper = shallow(<Alerter />)
    Alerter.info(`Test alert with button`, {
      buttonText: 'BTN'
    })
    expect(
      wrapper
        .find(Alert)
        .dive()
        .getElement()
    ).toMatchSnapshot()
  })

  it('handle dismiss provided to buttonAction', () => {
    const alerterWrapper = shallow(<Alerter />)
    Alerter.info(`Test alert with button`, {
      buttonText: 'BTN',
      buttonAction: dismiss => {
        console.log('DISMISS')
        dismiss()
      },
      duration: 20000
    })
    const alertWrapper = alerterWrapper.find(Alert)
    const alert = alertWrapper.dive()
    expect(alert.getElement()).toMatchSnapshot()
    alert.instance().base = document.createElement('div')
    // we have to wait the same delay as in the Alerter didMount
    setTimeout(() => {
      expect(alert.state('hidden')).toBe(false)
      alert
        .children()
        .find(Button)
        .simulate('click')
      expect(alert.state('hidden')).toBe(true)
    }, 20)
  })
})
