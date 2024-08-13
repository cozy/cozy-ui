import React from 'react'
import { act } from 'react-dom/test-utils'
import SwipeableViews from 'react-swipeable-views'

import Button from '../Button'
import IconButton from '../../IconButton'
import Infos from '../Infos'
import Typography from '../../Typography'

import InfosCarrousel from '.'

// This is necessary for tests to be predictable
const swipeableProps = { disableLazyLoading: true }

const Example = ({ numberOfChildren = 2 }) => (
  <div className="u-stack-m">
    <InfosCarrousel theme="danger" swipeableProps={swipeableProps}>
      {[...new Array(numberOfChildren)].map((child, index) => (
        <Infos
          key={index}
          description={
            <>
              <Typography variant="h5">News {index}</Typography>
              <Typography variant="body1">Breaking news {index}</Typography>
            </>
          }
          action={<Button theme="secondary" label="A CTA button" />}
        />
      ))}
    </InfosCarrousel>
  </div>
)

const getArrowsDisabledProps = root =>
  root
    .find(IconButton)
    .map(node => node.props())
    .map(x => x.disabled)

const simulateSwipeToSlideIndex = (root, slideIndex) => {
  act(() => {
    root
      .find(SwipeableViews)
      .props()
      .onChangeIndex(slideIndex)
  })
  root.update()
}

describe('InfosCarrousel', () => {
  const setup = () => {
    const root = mount(<Example />)
    return { root }
  }

  it('should update arrows after swipe', () => {
    const { root } = setup()
    expect(getArrowsDisabledProps(root)).toEqual([true, false])
    simulateSwipeToSlideIndex(root, 1)
    expect(getArrowsDisabledProps(root)).toEqual([false, true])
    simulateSwipeToSlideIndex(root, 0)
    expect(getArrowsDisabledProps(root)).toEqual([true, false])
  })

  it('should change index when a child is removed', () => {
    const root = mount(<Example numberOfChildren={3} />)
    expect(root.find(SwipeableViews).prop('index')).toEqual(0)
    simulateSwipeToSlideIndex(root, 2)
    expect(root.find(SwipeableViews).prop('index')).toEqual(2)
    root.setProps({ numberOfChildren: 2 })
    root.update()
    expect(root.find(Infos).length).toBe(2)
    expect(root.find(SwipeableViews).prop('index')).toEqual(1)
  })
})
