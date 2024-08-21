import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Icon from '../Icon'
import SpinnerIcon from '../Icons/Spinner'
import Typography from '../Typography'
import { useI18n } from '../providers/I18n'

/**
 * @typedef SpinnerProps
 * @property {string} [loadingType] - The type of loading.
 * @property {boolean} [middle] - Whether to position the spinner in the middle.
 * @property {boolean} [noMargin] - Whether to remove margin around the spinner.
 * @property {string} [color] - The color of the spinner.
 * @property {'tiny'|'small'|'medium'|'large'|'xlarge'|'xxlarge'} [size] - The size of the spinner.
 * @property {string} [className] - The additional CSS class name for the spinner.
 */

/**
 * @param {SpinnerProps} props
 */
export const Spinner = ({
  loadingType,
  middle,
  noMargin,
  color,
  size,
  className
}) => {
  const { t } = useI18n()
  const realsizeMapping = {
    tiny: 8,
    small: 12,
    medium: 16,
    large: 24,
    xlarge: 36,
    xxlarge: 80
  }
  const realsize = realsizeMapping[size]

  return (
    <div
      className={cx(
        styles['c-spinner'],
        {
          [styles['c-spinner--middle']]: middle,
          [styles['c-spinner--nomargin']]: noMargin
        },
        className
      )}
    >
      <Icon icon={SpinnerIcon} color={color} spin={true} size={realsize} />
      {loadingType && (
        <Typography variant="body1" color="textSecondary" component="p">
          {t(`loading.${loadingType}`)}
        </Typography>
      )}
    </div>
  )
}

Spinner.propTypes = {
  loadingType: PropTypes.string,
  middle: PropTypes.bool,
  noMargin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge'
  ]),
  className: PropTypes.string
}

Spinner.defaultProps = {
  loadingType: '',
  middle: false,
  noMargin: false,
  color: 'var(--primaryColor)',
  size: 'medium',
  className: ''
}

export default Spinner
