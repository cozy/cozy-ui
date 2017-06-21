import React from 'react'
import { translate } from '../helpers/I18n'
import classNames from 'classnames'

import styles from './styles'

export const Spinner = ({ t, loadingType, middle, center, noMargin, color, size }) => {
  return (
    <div
      className={classNames(
        styles['coz-spinner'], {
          [styles['coz-spinner--middle']]: middle,
          [styles['coz-spinner--center']]: center,
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
