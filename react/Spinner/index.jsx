import React from 'react'
import { translate } from '../helpers/I18n'
import classNames from 'classnames'

import styles from './styles'

// === Component Options ===
// loadingType = message type from locale [string] (default: '')
// middle      = Component is centered both vertically & horizontally [bool] (default: false)
// noMargin    = Component has no margin [bool] (default: false)
// color       = Color of the spinner (available colors: blue, grey, white, red) [string] (default: 'blue')
// size        = Size of the spinner (available sizes: tiny, small, medium, large, xlarge, xxlarge) [string] (default: 'medium')

export const Spinner = ({ t, loadingType, middle, noMargin, color, size }) => {
  return (
    <div
      className={classNames(
        styles['coz-spinner'], {
          [styles['coz-spinner--middle']]: middle,
          [styles['coz-spinner--no-margin']]: noMargin,
          [styles[`coz-spinner--${color}`]]: color,
          [styles[`coz-spinner--${size}`]]: size
        }
      )}
    >
      {loadingType && <p>{t(`loading.${loadingType}`)}</p>}
    </div>
  )
}

export default translate()(Spinner)
