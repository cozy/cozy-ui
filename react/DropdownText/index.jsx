import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../styles'
import Typography from '../Typography'
import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: ({ spaceBetween }) =>
      spaceBetween ? 'space-between' : 'left'
  },
  typography: {
    color: ({ disabled }) =>
      theme.palette.text[disabled ? 'disabled' : 'primary']
  },
  endIcon: {
    display: 'flex',
    marginLeft: '5px',
    marginTop: ({ variant }) => (variant === 'body1' ? '3px' : undefined),
    color: ({ disabled }) =>
      theme.palette.text[disabled ? 'disabled' : 'primary']
  }
}))

const endIconSizeByVariant = {
  h1: 24,
  h2: 17,
  h3: 15,
  h4: 14,
  h5: 13,
  h6: 12,
  body1: 12,
  body2: 11,
  caption: 10,
  subtitle1: 11,
  subtitle2: 10
}

const DropdownText = forwardRef(
  (
    {
      spaceBetween = false,
      variant = 'body1',
      disabled = false,
      noWrap = false,
      color = 'primary',
      children,
      innerTextProps,
      innerIconContainerProps,
      innerIconProps,
      ...props
    },
    ref
  ) => {
    const styles = useStyles({ spaceBetween, disabled, color, variant })

    return (
      <div ref={ref} className={styles.container} {...props}>
        <Typography
          classes={{ root: styles.typography }}
          variant={variant}
          noWrap={noWrap}
          {...innerTextProps}
        >
          {children}
        </Typography>
        <Typography
          classes={{ root: styles.endIcon }}
          {...innerIconContainerProps}
        >
          <Icon
            icon={BottomIcon}
            size={endIconSizeByVariant[variant]}
            {...innerIconProps}
          />
        </Typography>
      </div>
    )
  }
)

DropdownText.propTypes = {
  /** Whether there is a space between the label and the icon */
  spaceBetween: PropTypes.bool,
  /** Variant used by Typography component */
  variant: PropTypes.string,
  /** Whether the component is disabled */
  disabled: PropTypes.bool,
  /** Whether using ellipsis on text */
  noWrap: PropTypes.bool,
  /** Props passed to the text */
  innerTextProps: PropTypes.object,
  /** Props passed to the icon container */
  innerIconContainerProps: PropTypes.object,
  /** Props passed to the icon */
  innerIconProps: PropTypes.object,
  children: PropTypes.node
}

export default DropdownText
