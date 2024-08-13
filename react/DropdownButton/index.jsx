import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import { makeStyles } from '../styles'
import DropdownText from '../DropdownText'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    width: ({ fullWidth, noWrap }) =>
      fullWidth || noWrap ? `calc(100% + 16px)` : 'auto',
    margin: '-8px',
    padding: '8px'
  },
  text: {
    textTransform: 'none',
    textAlign: 'left'
  }
})

const DropdownButton = forwardRef(
  (
    {
      spaceBetween,
      textVariant,
      disabled,
      fullWidth,
      noWrap,
      children,
      className,
      dropdownTextProps,
      ...props
    },
    ref
  ) => {
    const { root, text } = useStyles({ fullWidth, noWrap })

    return (
      <Button
        ref={ref}
        classes={{ root, text }}
        disabled={disabled}
        className={className}
        {...props}
      >
        <DropdownText
          variant={textVariant}
          spaceBetween={spaceBetween}
          disabled={disabled}
          noWrap={noWrap}
          {...dropdownTextProps}
        >
          {children}
        </DropdownText>
      </Button>
    )
  }
)

DropdownButton.defaultProps = {
  spaceBetween: false,
  textVariant: 'body1',
  disabled: false,
  fullWidth: false,
  noWrap: false
}

DropdownButton.propTypes = {
  /** Whether there is a space between the label and the icon */
  spaceBetween: PropTypes.bool,
  /** Like variant from Typography component */
  textVariant: PropTypes.string,
  /** Whether the component is disabled */
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  /** Whether using ellipsis on text */
  noWrap: PropTypes.bool,
  /** Props assigned to the DropdownText inner component */
  dropdownTextProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
}

export default DropdownButton
