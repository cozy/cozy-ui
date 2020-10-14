import React from 'react'
import Types from 'prop-types'
import cx from 'classnames'
import styles from './Figure.styl'
import { useI18n } from '../I18n'

const stylePositive = styles['Figure-content--positive']
const styleNegative = styles['Figure-content--negative']
const styleWarning = styles['Figure-content--warning']
const styleBig = styles['Figure--big']
const styleClickable = styles['Figure--clickable']

const zeroPadding = '00000'
/**
 * Utility function to format numbers
 * from https://stackoverflow.com/questions/5731193/how-to-format-numbers
 */
const formatThousandsNoRounding = function(
  n,
  decimalPrecision,
  decimalSeparator,
  thousandSeparator
) {
  let e = ''
  let s = e + n
  let l = s.length
  let b = n < 0 ? 1 : 0
  let dotIndex = s.lastIndexOf('.')
  let j = dotIndex == -1 ? l : dotIndex
  let r = e
  let d = s.substr(j + 1, decimalPrecision)
  while ((j -= 3) > b) {
    r = thousandSeparator + s.substr(j, 3) + r
  }
  return (
    s.substr(0, j + 3) +
    r +
    (decimalPrecision
      ? decimalSeparator +
        d +
        (d.length < decimalPrecision
          ? zeroPadding.substr(0, decimalPrecision - d.length)
          : e)
      : e)
  )
}

const decimalSeparatorPerLocale = {
  fr: ',',
  en: '.'
}

const thousandSeparatorPerLocale = {
  fr: '\u00A0', // unbreakable space
  en: ','
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

  const decimalSeparator =
    decimalSeparatorPerLocale[lang] || decimalSeparator.en
  const thousandSeparator =
    thousandSeparatorPerLocale[lang] || thousandSeparator.en

  let { decimalNumbers } = props
  decimalNumbers = isNaN(decimalNumbers) ? 2 : decimalNumbers

  const totalFormatted = formatThousandsNoRounding(
    total,
    decimalNumbers,
    decimalSeparator,
    thousandSeparator
  )
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
        {totalFormatted}
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
