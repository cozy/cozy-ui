'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import Alerter from '.'
import Alert from './Alert'
import Button from '../Button'

describe('Alerter component', () => {
  beforeEach(() => {
    Alerter.reset()
  })
  //
  ;['info', 'success', 'error'].forEach(type => {
    it(`renders correctly an ${type} alert`, () => {
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

  it('should not render too much alerts', () => {
    const wrapper = shallow(<Alerter />)
    Alerter.info(`Test 1`)
    Alerter.info(`Test 2`)
    Alerter.info(`Test 3`)
    expect(wrapper.find(Alert).length).toBe(3)
  })

  it('renders button if buttonText provided', () => {
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

  it('handles dismiss provided to buttonAction', () => {
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

  it('handles programmatic removal', () => {
    const wrapper = shallow(<Alerter />)
    const notif = Alerter.info(`Test alert with button`, {
      duration: 20000
    })
    Alerter.info(`Test another alert`, {
      duration: 20000
    })
    expect(wrapper.find(Alert).length).toBe(2)
    Alerter.removeNotification(notif)
    expect(wrapper.find(Alert).length).toBe(1)

    // Nothing should happen if we try to remove a non existing notification
    Alerter.removeNotification(notif)
    expect(wrapper.find(Alert).length).toBe(1)
  })
})
