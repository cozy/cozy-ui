import { act } from 'react-dom/test-utils'
import React from 'react'
import InfosCarrousel from '.'
import IconButton from '../IconButton'
import Infos from '../Infos'
import Button from '../Button'
import Text, { SubTitle } from '../Text'
import SwipeableViews from 'react-swipeable-views'

// This is necessary for tests to be predictable
const swipeableProps = { disableLazyLoading: true }

const Example = () => (
  <div className="u-stack-m">
    <InfosCarrousel theme="danger" swipeableProps={swipeableProps}>
      <Infos
        description={
          <>
            <SubTitle>News 1</SubTitle>
            <Text>Breaking news 1</Text>
          </>
        }
        action={<Button theme="secondary" label="A CTA button" />}
      />
      <Infos
        description={
          <>
            <SubTitle>News 2</SubTitle>
            <Text>Breaking news 2</Text>
          </>
        }
        theme="primary"
        action={<Button theme="secondary" label="A CTA button" />}
      />
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
})
