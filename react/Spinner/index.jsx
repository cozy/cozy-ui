import React from 'react'
import { translate } from '../I18n'
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
        },
        className
      )}
    >
      {loadingType && <p>{t(`loading.${loadingType}`)}</p>}
    </div>
  )
}

Spinner.propTypes = {
  loadingType: PropTypes.string,
  middle: PropTypes.boolean,
  noMargin: PropTypes.boolean,
  color: PropTypes.oneOf(['blue', 'grey', 'white', 'red']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  className: PropTypes.string
}

Spinner.defaultProps = {
  loadingType: '',
  middle: false,
  noMargin: false,
  color: 'blue',
  size: 'medium',
  className: ''
}

export default translate()(Spinner)
