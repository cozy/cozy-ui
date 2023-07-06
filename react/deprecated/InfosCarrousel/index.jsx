import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import clamp from 'lodash/clamp'
import SwipeableViews from 'react-swipeable-views'

import Icon from '../../Icon'
import IconButton from '../../IconButton'

import styles from './styles.styl'

import LeftIcon from '../../Icons/Left'
import RightIcon from '../../Icons/Right'

const useClampedValue = (initialValue, min, max) => {
  const [value, setValue] = useState(initialValue)

  const setClampedValue = newVal => setValue(clamp(newVal, min, max))

  useEffect(() => {
    setClampedValue(value)
    // TODO: validate the deps are correct
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max])

  return [clamp(value, min, max), setClampedValue]
}

const InfosCarrousel = ({
  children,
  theme,
  className,
  swipeableProps,
  previousButtonProps,
  nextButtonProps
}) => {
  const count = React.Children.count(children)
  const [index, setIndex] = useClampedValue(0, 0, count - 1)
  const goToNextInfos = () => setIndex(index + 1)
  const goToPreviousInfos = () => setIndex(index - 1)
  const hasPreviousInfos = index === 0
  const hasNextInfos = index === count - 1

  const onChangeIndex = useCallback(
    function(index) {
      const { onChangeIndex: onChangeIndexProp } = swipeableProps
      if (onChangeIndexProp) {
        onChangeIndexProp(index)
      }
      setIndex(index)
    },
    [setIndex, swipeableProps]
  )

  return (
    <div className={cx(styles['InfosCarrousel'], className)}>
      <SwipeableViews
        index={index}
        animateHeight
        {...swipeableProps}
        onChangeIndex={onChangeIndex}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, { theme: child.props.theme || theme })
        )}
      </SwipeableViews>
      {React.Children.count(children) > 1 ? (
        <div className={styles['InfosCarrousel-navigation']}>
          <IconButton
            onClick={goToPreviousInfos}
            disabled={hasPreviousInfos}
            size="medium"
            {...previousButtonProps}
          >
            <Icon icon={LeftIcon} />
          </IconButton>
          <span className={styles['InfosCarrousel-separator']} />
          <IconButton
            onClick={goToNextInfos}
            disabled={hasNextInfos}
            size="medium"
            {...nextButtonProps}
          >
            <Icon icon={RightIcon} />
          </IconButton>
        </div>
      ) : null}
    </div>
  )
}

InfosCarrousel.propTypes = {
  /** Infos components that will be rendered, one per carrousel slide */
  children: PropTypes.node,
  /** Controls the color scheme of the carrousel. This prop is passed onto child Infos, unless they have their own defined theme prop.  */
  theme: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  /** Extra classes to apply to the main wrapper */
  className: PropTypes.string,
  /** Props to pass to the underlying react-swipeable-views component */
  swipeableProps: PropTypes.object,
  /** Props for previous button */
  previousButtonProps: PropTypes.object,
  /** Props for next button */
  nextButtonProps: PropTypes.string
}

InfosCarrousel.defaultProps = {
  theme: 'primary'
}

export default InfosCarrousel
