import React from 'react'
import { translate } from '../I18n'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles'

export const Spinner = ({ t, loadingType, middle, noMargin, color, size, className }) => {
  return (
    <div
      className={classNames(
        styles['c-spinner'], {
          [styles['c-spinner--middle']]: middle,
          [styles['c-spinner--nomargin']]: noMargin,
          [styles[`c-spinner--${color}`]]: color,
          [styles[`c-spinner--${size}`]]: size
        }
      ), className}
    >
      {loadingType && <p>{t(`loading.${loadingType}`)}</p>}
    </div>
  )
}

Spinner.propTypes = {
  loadingType: PropTypes.string,
  middle: PropTypes.boolean,
  noMargin: PropTypes.boolean,
  color: PropTypes.oneOf(['grey', 'white', 'red']),
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'xlarge', 'xxlarge']),
  className: PropTypes.string
}

export default translate()(Spinner)
