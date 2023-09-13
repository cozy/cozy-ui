import React, { forwardRef, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import debounce from 'lodash/debounce'

import { useI18n } from '../providers/I18n'
import withOnlyLocales from './locales/withOnlyLocales'
import { makeStyles } from '../styles'
import Paper from '../Paper'
import InputBase from '../InputBase'
import IconButton from '../IconButton'
import Icon from '../Icon'
import MagnifierIcon from '../Icons/Magnifier'
import CrossCircleIcon from '../Icons/CrossCircle'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
    position: 'relative',
    alignItems: 'center',
    height: 40,
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
    flex: 1
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
    const classes = useStyles()
    const [currentValue, setCurrentValue] = useState(defaultValue)
    const [isFocused, setIsFocused] = useState(false)

    const placeholder = placeholderProp || t('search.placeholder')

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
        <Icon className={classes.icon} icon={MagnifierIcon} />
        <InputBase
          className={classes.inputBase}
          placeholder={disabled ? null : placeholder}
          value={disabled ? placeholder : currentValue}
          disabled={disabled}
          aria-label={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {currentValue && (
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
  defaultValue: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {}
}

SearchBar.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  elevation: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

export default withOnlyLocales(SearchBar)
