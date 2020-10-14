import React, { useMemo } from 'react'
import Types from 'prop-types'
import cx from 'classnames'
import styles from './Figure.styl'
import { useI18n } from '../I18n'

const stylePositive = styles['Figure-content--positive']
const styleNegative = styles['Figure-content--negative']
const styleWarning = styles['Figure-content--warning']
const styleBig = styles['Figure--big']
const styleClickable = styles['Figure--clickable']

/**
 * Formats with Number::toLocaleString and replace spaces for non-breaking
 * spaces
 *
 * - on Firefox, the narrow space is not correctly rendered (not visible)
 * - on Safari mobile, the space is not correctly rendered (not visible)
 */
const toLocaleStringEnhanced = (number, locale, decimalNumbers) => {
  let res = number.toLocaleString(locale, {
    minimumFractionDigits: decimalNumbers,
    maximumFractionDigits: decimalNumbers
  })

  if (number > 999) {
    res = res
      .split(' ') // narrow non breaking space not showing on Firefox
      .join('\u00a0')
      .split('\u202f') // narrow non breaking space not showing on Firefox
      .join('\u00a0')
  }

  return res
}

/**
 * Shows a number, typically a balance or an important financial
 * number in a bold way.
 */
const Figure = props => {
  const {
    symbol,
    withCurrencySpacing = true,
    coloredPositive,
    coloredNegative,
    coloredWarning,
    warningLimit,
    signed,
    className,
    total,
    totalClassName,
    currencyClassName,
    size,
    onClick,
    inline,
    blurred
  } = props

  const { lang } = useI18n()

  let { decimalNumbers } = props
  decimalNumbers = isNaN(decimalNumbers) ? 2 : decimalNumbers

  const totalLocalized = useMemo(() => {
    return typeof total === 'number'
      ? toLocaleStringEnhanced(total, lang, decimalNumbers)
      : total
  }, [total, lang, decimalNumbers])

  const isTotalPositive = total > 0
  const isTotalInLimit = total > warningLimit
  const isWarning = !isTotalPositive && !isTotalInLimit && coloredWarning

  return (
    <div
      className={cx(
        {
          [stylePositive]: isTotalPositive && coloredPositive,
          [styleNegative]:
            total !== 0 && !isTotalPositive && !isWarning && coloredNegative,
          [styleWarning]: isWarning,
          [styleBig]: size == 'big',
          [styleClickable]: onClick,
          [styles.Figure_blur]: blurred,
          [styles['Figure--inline']]: inline
        },
        className
      )}
      onClick={onClick}
    >
      <span className={cx(styles['Figure-total'], totalClassName)}>
        {isTotalPositive && signed && '+'}
        {totalLocalized}
      </span>
      {symbol && (
        <span
          className={cx(
            styles['Figure-currency'],
            {
              [styles['Figure__currency--withSpacing']]: withCurrencySpacing
            },
            currencyClassName
          )}
        >
          {symbol}
        </span>
      )}
    </div>
  )
}

Figure.propTypes = {
  /** Number to display */
  total: Types.oneOfType([Types.number, Types.string]).isRequired,
  /** Class name applied to the element wrapping the number */
  totalClassName: Types.string,
  /** Currency to show */
  symbol: Types.string,
  currencyClassName: Types.string,
  /** Colors positive numbers in green */
  coloredPositive: Types.bool,
  /** Colors negative numbers in red */
  coloredNegative: Types.bool,
  /** Displays the sign */
  signed: Types.bool,
  /** Numbers of decimals to show (default=2) */
  decimalNumbers: Types.number,
  /** Whether to add a specific class to show warning */
  warningLimit: Types.number,
  /** Whether to add some spacing between the figure and the currency or not */
  withCurrencySpacing: Types.bool,
  /** Blur the amount, useful for personal content (banking for example) */
  blurred: Types.bool
}

export default React.memo(Figure)
