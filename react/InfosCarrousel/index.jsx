import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SwipeableViews from 'react-swipeable-views'

import styles from './styles.styl'
import Icon from '../Icon'
import IconButton from '../IconButton'

const InfosCarrousel = ({ children, theme, className, swipeableProps }) => {
  const count = React.Children.count(children)
  const [index, setIndex] = useState(0)
  const goToNextInfos = useCallback(() => setIndex(index + 1), [index])
  const goToPreviousInfos = useCallback(() => setIndex(index - 1), [index])
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
          <IconButton onClick={goToPreviousInfos} disabled={hasPreviousInfos}>
            <Icon icon="left" />
          </IconButton>
          <span className={styles['InfosCarrousel-separator']} />
          <IconButton onClick={goToNextInfos} disabled={hasNextInfos}>
            <Icon icon="right" />
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
  swipeableProps: PropTypes.object
}

InfosCarrousel.defaultProps = {
  theme: 'primary'
}

export default InfosCarrousel
