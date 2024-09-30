import cx from 'classnames'
import debounce from 'lodash/debounce'
import PropTypes from 'prop-types'
import React, { forwardRef, useState, useMemo } from 'react'

import withOnlyLocales from './locales/withOnlyLocales'
import ButtonBase from '../ButtonBase'
import Icon from '../Icon'
import { iconPropType } from '../Icon'
import IconButton from '../IconButton'
import CrossCircleIcon from '../Icons/CrossCircle'
import MagnifierIcon from '../Icons/Magnifier'
import InputBase from '../InputBase'
import Paper from '../Paper'
import Typography from '../Typography'
import { useI18n } from '../providers/I18n'
import { makeStyles } from '../styles'

const sizeToPixel = {
  small: 40,
  medium: 48,
  large: 56
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
    position: 'relative',
    alignItems: 'center',
    height: ({ size }) => sizeToPixel[size],
    flex: 1,
    borderRadius: 99,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    '&:hover': {
      '&:not($disabled):not($focused)': {
        '& $focusHighlight': {
          opacity: 1
        }
      }
    }
  },
  flat: {
    backgroundColor: theme.palette.background.contrast
  },
  inputBase: {
    flex: 1,
    paddingLeft: ({ icon }) => !icon && '1rem'
  },
  buttonBase: {
    flex: 1,
    justifyContent: 'start',
    height: '100%',
    borderRadius: 99
  },
  typography: {
    color: 'currentColor',
    opacity: 0.42,
    paddingLeft: ({ icon }) => !icon && '1rem'
  },
  icon: {
    color: theme.palette.text.secondary,
    padding: '0 1rem'
  },
  commonHighlight: {
    overflow: 'hidden',
    position: 'absolute',
    top: -1,
    right: -1,
    bottom: -1,
    left: -1,
    borderRadius: 'inherit',
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.short
    })
  },
  focusHighlight: {
    pointerEvents: 'none',
    backgroundColor: theme.palette.action.hover
  },
  disableHighlight: {
    backgroundColor: theme.palette.action.disabled
  },
  focused: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper
  },
  disabled: {
    '& $icon': {
      color: theme.palette.text.disabled
    },
    '& $disableHighlight': {
      opacity: 1
    }
  }
}))

const SearchBar = forwardRef(
  (
    {
      placeholder: placeholderProp,
      icon,
      size,
      type,
      label: labelProp,
      componentsProps,
      disabledClear,
      className,
      defaultValue,
      elevation,
      disabled,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const { t } = useI18n()
    const classes = useStyles({ size, type, icon })
    const [currentValue, setCurrentValue] = useState(defaultValue)
    const [isFocused, setIsFocused] = useState(false)

    const placeholder = placeholderProp || t('search.placeholder')
    const label = labelProp || t('search.placeholder')

    const delayedOnChange = useMemo(
      () => debounce(event => onChange(event), 375),
      [onChange]
    )

    const handleChange = ev => {
      const value = ev.target.value

      if (value.length >= 1) {
        delayedOnChange(ev)
        setCurrentValue(value)
      } else {
        handleClear(ev)
      }
    }

    const handleClear = ev => {
      onChange({ ...ev, target: { ...ev.target, value: '' } })
      setCurrentValue('')
    }

    const handleFocus = ev => {
      onFocus(ev)
      setIsFocused(true)
    }

    const handleBlur = ev => {
      onBlur(ev)
      setIsFocused(false)
    }

    return (
      <Paper
        component="form"
        elevation={elevation ? 1 : 0}
        className={cx(className, classes.root, {
          [classes.flat]: !elevation,
          [classes.elevation]: elevation,
          [classes.focused]: isFocused,
          [classes.disabled]: disabled
        })}
        ref={ref}
        {...props}
      >
        {type === 'button' ? (
          <ButtonBase className={classes.buttonBase}>
            {icon && <Icon className={classes.icon} icon={icon} />}
            {typeof label === 'string' ? (
              <Typography className={classes.typography}>{label}</Typography>
            ) : (
              label
            )}
          </ButtonBase>
        ) : (
          <>
            {icon && <Icon className={classes.icon} icon={icon} />}
            <InputBase
              {...componentsProps?.inputBase}
              className={classes.inputBase}
              placeholder={disabled ? null : placeholder}
              value={disabled ? placeholder : currentValue}
              disabled={disabled}
              aria-label={placeholder}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </>
        )}
        {currentValue && !disabledClear && (
          <IconButton size="medium" onClick={handleClear}>
            <Icon icon={CrossCircleIcon} />
          </IconButton>
        )}
        <span className={cx(classes.commonHighlight, classes.focusHighlight)} />
        {disabled && (
          <span
            className={cx(classes.commonHighlight, classes.disableHighlight)}
          />
        )}
      </Paper>
    )
  }
)

SearchBar.displayName = 'SearchBar'

SearchBar.defaultProps = {
  elevation: true,
  icon: MagnifierIcon,
  size: 'small',
  type: 'search',
  disabledClear: false,
  defaultValue: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {}
}

SearchBar.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'search']),
  icon: iconPropType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  componentsProps: PropTypes.shape({
    /** Props spread to InputBase component */
    inputBase: PropTypes.object
  }),
  defaultValue: PropTypes.string,
  disabledClear: PropTypes.bool,
  elevation: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

export default withOnlyLocales(SearchBar)
