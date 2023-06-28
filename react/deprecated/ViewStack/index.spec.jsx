import { mount } from 'enzyme'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { Slide } from './example'
import ViewStack from '.'
import Button from '../Button'
import SwipeableViews from 'react-swipeable-views'

const findButtonWithLabel = (root, label) =>
  root.findWhere(n => n.type() == Button && n.props().label === label)

describe('ViewStack', () => {
  beforeEach(() => {
    const originalError = console.error.bind(console)

    // Ignore act's warning, since act does not support async logic and we have
    // a sleep when popping to wait for the animation
    jest.spyOn(console, 'error').mockImplementation(function(message) {
      if (
        !message.includes(
          'An update to %s inside a test was not wrapped in act'
        )
      ) {
        originalError.apply(this, arguments)
      }
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should push / pop views', async () => {
    const root = mount(
      <ViewStack>
        <Slide number={1} />
      </ViewStack>
    )
    expect(root.find(Slide).props().number).toBe(1)
    act(() => {
      findButtonWithLabel(root, 'stack')
        .props()
        .onClick()
    })
    root.update()

    const swiperProps = root.find(SwipeableViews).props()
    expect(swiperProps.children.length).toBe(2)
    expect(swiperProps.index).toBe(1)

    let prom
    act(() => {
      prom = findButtonWithLabel(root, 'pop')
        .props()
        .onClick()
    })
    root.update()
    const swiperProps2 = root.find(SwipeableViews).props()
    expect(swiperProps2.index).toBe(0)
    expect(swiperProps2.children.length).toBe(2) // waiting for animation

    await prom
    root.update()
    const swiperProps3 = root.find(SwipeableViews).props()
    expect(swiperProps3.children.length).toBe(1)
  })
})
