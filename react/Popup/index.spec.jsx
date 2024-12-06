import { render, fireEvent } from '@testing-library/react'
import React from 'react'

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

class MessageEventMock extends Event {
  constructor(options = {}, mock) {
    super('message', options)
    this.source = options.source || mock
  }
}

class LoadStartEventMock extends Event {
  constructor(url) {
    super('loadstart')
    this.url = url
  }
}

class ExitEventMock extends Event {
  constructor() {
    super('exit')
  }
}

describe('Popup', () => {
  const setup = ({ mockAddEventListener = true }) => {
    const popupMock = new EventTarget()

    isMobileApp.mockReturnValue(false)

    jest.spyOn(global, 'open').mockReturnValue(popupMock)
    jest.spyOn(global, 'addEventListener')

    if (mockAddEventListener) {
      popupMock.addEventListener = jest.fn()
    }

    popupMock.close = jest.fn()
    popupMock.focus = jest.fn()
    popupMock.closed = false
    props.onClose = jest.fn()
    props.onMessage = jest.fn()
    props.onMobileUrlChange = jest.fn()

    return popupMock
  }

  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    global.open.mockRestore()
    global.addEventListener.mockRestore()
  })

  afterEach(() => {
    jest.clearAllMocks()
    isMobileApp.mockRestore()
  })

  it('should open new window', () => {
    const popupMock = setup({})

    render(<Popup {...props} />)

    expect(global.open).toHaveBeenCalledWith(
      props.initialUrl,
      props.title,
      expect.anything()
    )
    expect(popupMock.focus).toHaveBeenCalled()
  })

  it('should subscribe to message events', () => {
    setup({})

    render(<Popup {...props} />)

    expect(global.addEventListener).toHaveBeenCalledWith(
      'message',
      expect.any(Function)
    )
  })

  it('should subcribe to mobile events', () => {
    const popupMock = setup({})
    isMobileApp.mockReturnValue(true)

    render(<Popup {...props} />)

    expect(popupMock.addEventListener).toHaveBeenCalledWith(
      'loadstart',
      expect.any(Function)
    )
    expect(popupMock.addEventListener).toHaveBeenCalledWith(
      'exit',
      expect.any(Function)
    )
  })

  describe('handleClose', () => {
    it('should call onClose', () => {
      const popupMock = setup({
        mockAddEventListener: false
      })
      isMobileApp.mockReturnValue(true)

      render(<Popup {...props} />)

      const messageEvent = new ExitEventMock()
      fireEvent(popupMock, messageEvent)

      expect(props.onClose).toHaveBeenCalled()
    })
  })

  describe('handleMessage', () => {
    it('should call onMessage', () => {
      const popupMock = setup({
        mockAddEventListener: false
      })
      isMobileApp.mockReturnValue(true)

      render(<Popup {...props} />)

      const messageEvent = new MessageEventMock({}, popupMock)
      fireEvent(window, messageEvent)

      expect(props.onMessage).toHaveBeenCalledWith(messageEvent)
    })

    it('should ignore messageEvent from another window ', () => {
      setup({
        mockAddEventListener: false
      })
      isMobileApp.mockReturnValue(true)

      render(<Popup {...props} />)

      const messageEvent = new MessageEventMock({ source: {} })
      fireEvent(window, messageEvent)

      expect(props.onMessage).not.toHaveBeenCalled()
    })
  })

  describe('handleLoadStart', () => {
    it('should call onMobileUrlChange', () => {
      const popupMock = setup({
        mockAddEventListener: false
      })
      isMobileApp.mockReturnValue(true)

      render(<Popup {...props} />)

      const url = 'https://cozy.io'
      const messageEvent = new LoadStartEventMock(url)
      fireEvent(popupMock, messageEvent)

      expect(props.onMobileUrlChange).toHaveBeenCalledWith(expect.any(URL))
      expect(props.onMobileUrlChange).toHaveBeenCalledWith(new URL(url))
    })
  })
})
