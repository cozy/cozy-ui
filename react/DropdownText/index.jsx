import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'
import Typography from '../Typography'
import { makeStyles } from '../styles'

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
      disabled ? theme.palette.text.disabled : undefined
  },
  endIcon: {
    display: 'flex',
    marginLeft: '5px',
    marginTop: ({ variant }) => (variant === 'body1' ? '3px' : undefined),
    color: ({ disabled }) =>
      disabled ? theme.palette.text.disabled : undefined
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
      color = 'initial',
      children,
      innerTextProps,
      innerIconContainerProps,
      innerIconProps,
      ...props
    },
    ref
  ) => {
    const styles = useStyles({ spaceBetween, disabled, variant })

    return (
      <div ref={ref} className={styles.container} {...props}>
        <Typography
          color={color}
          classes={{ root: styles.typography }}
          variant={variant}
          noWrap={noWrap}
          {...innerTextProps}
        >
          {children}
        </Typography>
        <Typography
          color={color}
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
  /** Color used by Typography component */
  color: PropTypes.string,
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
