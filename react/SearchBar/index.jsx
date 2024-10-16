import cx from 'classnames'
import debounce from 'lodash/debounce'
import PropTypes from 'prop-types'
import React, { forwardRef, useState, useMemo } from 'react'

import { locales } from './locales/withOnlyLocales'
import ButtonBase from '../ButtonBase'
import Icon from '../Icon'
import { iconPropType } from '../Icon'
import IconButton from '../IconButton'
import CrossCircleIcon from '../Icons/CrossCircle'
import MagnifierIcon from '../Icons/Magnifier'
import InputBase from '../InputBase'
import Paper from '../Paper'
import Typography from '../Typography'
import { useI18n, useExtendI18n } from '../providers/I18n'
import { makeStyles } from '../styles'

const sizeToPixel = {
  small: 40,
  medium: 48,
  large: 56,
  auto: 'auto'
}

const radiusBySize = {
  small: 20,
  medium: 24,
  large: 28,
  auto: 24
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
    position: 'relative',
    alignItems: 'center',
    height: ({ size }) => sizeToPixel[size],
    flex: 1,
    borderRadius: ({ size }) => radiusBySize[size],
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
      disabledFocus,
      className,
      defaultValue,
      value,
      elevation,
      disabled,
      onChange,
      onClear,
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

    const placeholder = placeholderProp || t('SearchBar.placeholder')
    const label = labelProp || t('SearchBar.placeholder')
    const spreadValue = value || currentValue
    const isSelfControlledComp = typeof value === 'undefined'

    const delayedOnChange = useMemo(() => debounce(onChange, 375), [onChange])

    const handleChange = ev => {
      if (!isSelfControlledComp) return onChange(ev)

      const _value = ev.target.value

      if (_value.length >= 1) {
        delayedOnChange(ev)
        setCurrentValue(_value)
      } else {
        handleClear(ev)
      }
    }

    const handleClear = ev => {
      onChange({ ...ev, target: { ...ev.target, value: '' } })
      onClear(ev)
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
          [classes.focused]: isFocused && !disabledFocus,
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
              className={cx(
                classes.inputBase,
                componentsProps?.inputBase?.className
              )}
              placeholder={disabled ? null : placeholder}
              value={disabled ? placeholder : spreadValue}
              disabled={disabled}
              aria-label={placeholder}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </>
        )}
        {spreadValue && !disabledClear && (
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
  disabledFocus: false,
  defaultValue: '',
  onChange: () => {},
  onFocus: () => {},
  onClear: () => {},
  onBlur: () => {}
}

SearchBar.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'search']),
  icon: iconPropType,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  componentsProps: PropTypes.shape({
    /** Props spread to InputBase component */
    inputBase: PropTypes.object
  }),
  /** Used to control the component outside of it */
  value: PropTypes.string,
  /** Used only with self-controlled component */
  defaultValue: PropTypes.string,
  disabledClear: PropTypes.bool,
  disabledFocus: PropTypes.bool,
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
  onClear: PropTypes.func,
  onBlur: PropTypes.func
}

const SearchBarWithLocales = forwardRef((props, ref) => {
  useExtendI18n(locales)

  return <SearchBar {...props} ref={ref} />
})

export default SearchBarWithLocales
