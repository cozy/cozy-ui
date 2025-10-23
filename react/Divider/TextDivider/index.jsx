import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Typography from '../../Typography'

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
