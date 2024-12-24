import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker as MuiKeyboardDatePicker,
  KeyboardTimePicker as MuiKeyboardTimePicker,
  KeyboardDateTimePicker as MuiKeyboardDateTimePicker,
  DatePicker as MuiDatePicker,
  TimePicker as MuiTimePicker,
  DateTimePicker as MuiDateTimePicker
} from '@material-ui/pickers'
import cx from 'classnames'
import formatFNS from 'date-fns/format'
import isBefore from 'date-fns/isBefore'
import LocaleEN from 'date-fns/locale/en-US'
import LocaleFR from 'date-fns/locale/fr'
import subDays from 'date-fns/subDays'
import PropTypes from 'prop-types'
import React, { forwardRef, useState } from 'react'

import { makeFormat } from './helpers'
import withOwnLocales from './locales/withOwnLocales'
import useBreakpoints from '../providers/Breakpoints'
import { useI18n } from '../providers/I18n'
import { makeStyles } from '../styles'

const localesFNS = {
  fr: LocaleFR,
  en: LocaleEN
}

const useStyles = makeStyles(() => ({
  overrides: {
    width: '100%',
    height: isDesktop => (isDesktop ? '5rem' : 'inherit'),
    MuiOutlinedInput: {
      '&:focused': {
        notchedOutline: {
          borderColor: 'var(--primaryColor)'
        }
      }
    }
  }
}))

const DatePicker = forwardRef(
  (
    {
      className,
      label,
      clearable = false,
      value = null,
      placeholder,
      onFocus,
      onBlur,
      onChange,
      minDate,
      minDateLabelError,
      format,
      cancelLabel,
      clearLabel,
      okLabel,
      todayLabel,
      showTodayButton = false,
      helperText,
      errorLabel,
      inputVariant = 'outlined',
      inputProps,
      KeyboardButtonProps,
      enableKeyboard,
      mode = 'date',
      ampm,
      ...props
    },
    ref
  ) => {
    const [error, setError] = useState(null)
    const [isFocused, setIsFocused] = useState(false)

    const { isDesktop } = useBreakpoints()
    const classes = useStyles(isDesktop)
    const { t, lang } = useI18n()

    const isError = !isFocused && Boolean(error)
    const _helperText = isError ? error : helperText ?? null
    const _format = format || makeFormat({ ampm, mode, lang })
    const _ampm = ampm ?? !(mode === 'time' || mode === 'dateTime')
    const _placeholder = placeholder ?? formatFNS(new Date(), _format)
    const _clearLabel = clearLabel || t('clear')
    const _todayLabel = todayLabel || t('today')
    const _cancelLabel = cancelLabel || t('cancel')
    const _okLabel = okLabel || t('ok')
    const _minDateLabelError = minDateLabelError
      ? minDateLabelError
      : minDate
      ? t('minDateLabelError', {
          date: formatFNS(minDate, _format)
        })
      : null

    const _KeyboardButtonProps = {
      'aria-label': label,
      ...KeyboardButtonProps
    }
    const _inputProps = { inputMode: 'numeric', ...inputProps }

    const handleChange = val => {
      if (val?.toString() !== 'Invalid Date') {
        if (minDate && isBefore(val, subDays(minDate, 1))) {
          setError(_minDateLabelError)
          onChange(val, false)
          return
        }
        setError(null)
        onChange(val, true)
      } else if (val === '') {
        setError(null)
        onChange(null, true)
      } else {
        setError(errorLabel ?? t('invalidDate'))
        onChange(val, false)
      }
    }

    const handleBlur = () => {
      setIsFocused(false)
      onFocus?.(true)
      onBlur?.(false)
    }
    const handleFocus = () => {
      setIsFocused(true)
      onFocus?.(false)
      onBlur?.(true)
    }

    let DatePickerComponent
    switch (mode) {
      case 'date':
        DatePickerComponent = enableKeyboard
          ? MuiKeyboardDatePicker
          : MuiDatePicker
        break
      case 'time':
        DatePickerComponent = enableKeyboard
          ? MuiKeyboardTimePicker
          : MuiTimePicker
        break
      case 'dateTime':
        DatePickerComponent = enableKeyboard
          ? MuiKeyboardDateTimePicker
          : MuiDateTimePicker
        break
    }

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localesFNS[lang]}>
        <DatePickerComponent
          inputRef={ref}
          label={label}
          placeholder={_placeholder}
          value={value}
          helperText={_helperText}
          className={cx(classes.overrides, className)}
          minDate={minDate}
          ampm={_ampm}
          format={_format}
          onChange={handleChange}
          error={isError}
          onBlur={handleBlur}
          onFocus={handleFocus}
          inputVariant={inputVariant}
          inputProps={_inputProps}
          KeyboardButtonProps={_KeyboardButtonProps}
          // Modal start
          showTodayButton={showTodayButton}
          todayLabel={_todayLabel}
          clearable={clearable}
          clearLabel={_clearLabel}
          cancelLabel={_cancelLabel}
          okLabel={_okLabel}
          // Modal end
          {...props}
        />
      </MuiPickersUtilsProvider>
    )
  }
)

DatePicker.displayName = 'DatePicker'

DatePicker.prototype = {
  /*
    Classname to override the input style
  */
  className: PropTypes.string,
  /*
    Label of the input
  */
  label: PropTypes.string,
  /*
    Value of th input. If set by default with a Date, isValidDate will be false if the value is empty (KeyboardDatePicker behavior)
  */
  value: PropTypes.string.isRequired,
  /*
    Placeholder of the input
  */
  placeholder: PropTypes.string,
  /*
    Function that returns the value of the input when it changes and if it is a valid Date
  */
  onChange: PropTypes.func.isRequired,
  /*
    Function that returns if the input is blured
  */
  onBlur: PropTypes.func,
  /*
    Function that returns if the input is focused
  */
  onFocus: PropTypes.func,
  /*
    Helper text to display when the input is in error
  */
  helperText: PropTypes.string,
  /*
    Min date selectable with the date picker (exclusive)
  */
  minDate: PropTypes.instanceOf(Date),
  /*
    Error message when the min date is not respected
  */
  minDateLabelError: PropTypes.string,
  /*
    Format of the date
  */
  format: PropTypes.string,
  /*
    Date picker cancellation label
  */
  cancelLabel: PropTypes.string,
  /*
  Show today button
 */
  showTodayButton: PropTypes.bool,
  /*
    Date picker today label
  */
  todayLabel: PropTypes.string,
  /*
    Date picker ok label
  */
  okLabel: PropTypes.string,
  /*
    Show the clear button
  */
  clearable: PropTypes.bool,
  /*
    Date picker clear label
  */
  clearLabel: PropTypes.string,
  /*
    Error message when the date is invalid
  */
  errorLabel: PropTypes.string,
  /*
    Variant of the input
  */
  inputVariant: PropTypes.string,
  /*
    Props to override the input
  */
  inputProps: PropTypes.object,
  /*
    Props to override the keyboard button
  */
  KeyboardButtonProps: PropTypes.object,
  /*
    Enable the keyboard date picker
  */
  enableKeyboard: PropTypes.bool,
  /*
    Mode of the date picker. Default is "date"
  */
  mode: PropTypes.oneOf(['date', 'time', 'dateTime']),
  /*
    Enable the AM/PM selector
  */
  ampm: PropTypes.bool
}

export default withOwnLocales(React.memo(DatePicker))
