import React from 'react'
import { shallow } from 'enzyme'

import { isMobileApp } from 'cozy-device-helper'

import { Popup } from '.'

jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isMobileApp: jest.fn()
}))

const props = {
  initialUrl: 'http://example.org',
  title: 'Test title',
  width: '500',
  height: '200'
}

const popupMock = {}
class MessageEventMock {
  constructor(options = {}) {
    this.source = options.source || popupMock
  }
}

describe('Popup', () => {
  beforeAll(() => {
    jest.useFakeTimers()

    jest.spyOn(global, 'open').mockReturnValue(popupMock)
    jest.spyOn(global, 'addEventListener')
  })

  afterAll(() => {
    global.open.mockRestore()
    global.addEventListener.mockRestore()
  })

  beforeEach(() => {
    isMobileApp.mockReturnValue(false)
    popupMock.addEventListener = jest.fn()
    popupMock.close = jest.fn()
    popupMock.focus = jest.fn()
    popupMock.closed = false
    props.onClose = jest.fn()
    props.onMessage = jest.fn()
    props.onMobileUrlChange = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
    isMobileApp.mockRestore()
  })

  it('should open new window', () => {
    shallow(<Popup {...props} />)
    expect(global.open).toHaveBeenCalledWith(
      props.initialUrl,
      props.title,
      expect.anything()
    )
    expect(popupMock.focus).toHaveBeenCalled()
  })

  it('should subscribe to message events', () => {
    const wrapper = shallow(<Popup {...props} />)
    expect(global.addEventListener).toHaveBeenCalledWith(
      'message',
      wrapper.instance().handleMessage
    )
  })

  it('should subcribe to mobile events', () => {
    isMobileApp.mockReturnValue(true)
    const wrapper = shallow(<Popup {...props} />)
    expect(popupMock.addEventListener).toHaveBeenCalledWith(
      'loadstart',
      wrapper.instance().handleLoadStart
    )
    expect(popupMock.addEventListener).toHaveBeenCalledWith(
      'exit',
      wrapper.instance().handleClose
    )
  })

  describe('monitorClosing', () => {
    it('should detect closing', () => {
      const wrapper = shallow(<Popup {...props} />)
      jest.spyOn(wrapper.instance(), 'handleClose')
      popupMock.closed = true
      jest.runAllTimers()
      expect(wrapper.instance().handleClose).toHaveBeenCalled()
    })
  })

  describe('handleClose', () => {
    it('should call onClose', () => {
      const wrapper = shallow(<Popup {...props} />)
      wrapper.instance().handleClose()
      expect(props.onClose).toHaveBeenCalled()
    })
  })

  describe('handleMessage', () => {
    it('should call onMessage', () => {
      const wrapper = shallow(<Popup {...props} />)
      const messageEvent = new MessageEventMock()
      wrapper.instance().handleMessage(messageEvent)
      expect(props.onMessage).toHaveBeenCalledWith(messageEvent)
    })

    it('should ignore messageEvent from another window ', () => {
      const wrapper = shallow(<Popup {...props} />)
      const messageEvent = new MessageEventMock({ source: {} })
      wrapper.instance().handleMessage(messageEvent)
      expect(props.onMessage).not.toHaveBeenCalled()
    })
  })

  describe('handleLoadStart', () => {
    it('should call onMobileUrlChange', () => {
      const wrapper = shallow(<Popup {...props} />)
      const url = 'https://cozy.io'
      const urlEvent = { url }
      wrapper.instance().handleLoadStart(urlEvent)
      expect(props.onMobileUrlChange).toHaveBeenCalledWith(expect.any(URL))
      expect(props.onMobileUrlChange).toHaveBeenCalledWith(new URL(url))
    })
  })
})
