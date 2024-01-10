import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'
import Typography from '../Typography'
import { translate } from '../providers/I18n'
import SpinnerIcon from '../Icons/Spinner'

import styles from './styles.styl'

export const Spinner = ({
  t,
  loadingType,
  middle,
  noMargin,
  color,
  size,
  className
}) => {
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

export default translate()(Spinner)
