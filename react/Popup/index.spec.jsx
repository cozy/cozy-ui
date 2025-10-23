import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { Popup } from '.'

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

describe('Popup', () => {
  const setup = ({ mockAddEventListener = true }) => {
    const popupMock = new EventTarget()

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

  describe('handleMessage', () => {
    it('should call onMessage', () => {
      const popupMock = setup({
        mockAddEventListener: false
      })

      render(<Popup {...props} />)

      const messageEvent = new MessageEventMock({}, popupMock)
      fireEvent(window, messageEvent)

      expect(props.onMessage).toHaveBeenCalledWith(messageEvent)
    })

    it('should ignore messageEvent from another window ', () => {
      setup({
        mockAddEventListener: false
      })

      render(<Popup {...props} />)

      const messageEvent = new MessageEventMock({ source: {} })
      fireEvent(window, messageEvent)

      expect(props.onMessage).not.toHaveBeenCalled()
    })
  })
})
