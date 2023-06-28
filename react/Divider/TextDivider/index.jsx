import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Typography from '../../Typography'

import styles from './styles.styl'

/**
 * @description This component is composing `<Typography />` and has access to the same props
 */
const TextDivider = ({
  color = 'textPrimary',
  variant = 'body2',
  textAlign,
  children,
  className,
  ...props
}) => (
  <Typography
    color={color}
    variant={variant}
    className={cx(styles['divider'], styles[textAlign], className)}
    {...props}
  >
    {children}
  </Typography>
)

TextDivider.propTypes = {
  textAlign: PropTypes.oneOf(['center'])
}

export default TextDivider
