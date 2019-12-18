import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SwipeableViews from 'react-swipeable-views'

import styles from './styles.styl'
import Icon from '../Icon'

const InfosCarrousel = ({ children, theme, className, swipeableProps }) => {
  const count = React.Children.count(children)
  const [index, setIndex] = useState(0)
  const goToNextInfos = useCallback(() => setIndex(index + 1), [index])
  const goToPreviousInfos = useCallback(() => setIndex(index - 1), [index])
  const hasPreviousInfos = index === 0
  const hasNextInfos = index === count - 1

  return (
    <div
      className={cx(
        styles['InfosCarrousel'],
        styles[`InfosCarrousel--${theme}`],
        className
      )}
    >
      <SwipeableViews index={index} animateHeight {...swipeableProps}>
        {children}
      </SwipeableViews>
      <div className={styles['InfosCarrousel-navigation']}>
        <button
          className={styles['InfosCarrousel-arrow']}
          onClick={goToPreviousInfos}
          disabled={hasPreviousInfos}
        >
          <Icon icon="left" />
        </button>
        <span className={styles['InfosCarrousel-separator']} />
        <button
          className={styles['InfosCarrousel-arrow']}
          onClick={goToNextInfos}
          disabled={hasNextInfos}
        >
          <Icon icon="right" />
        </button>
      </div>
    </div>
  )
}

InfosCarrousel.propTypes = {
  /** Infos components that will be rendered, one per carrousel slide */
  children: PropTypes.element,
  /** Controls the color scheme of the carrousel */
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
