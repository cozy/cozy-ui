import React from 'react'
import Types from 'prop-types'
import classNames from 'classnames'
import Figure from './Figure'
import styles from './FigureBlock.styl'
import labelStyles from '../Label/styles.styl'

const labelStyle = labelStyles['c-label']

/**
 * Shows a `Figure` with a label, useful for important numbers.
 *
 * A part from `className` and `label`, takes same properties
 * as `Figure`.
 */
const FigureBlock = ({
  className,
  label,
  total,
  symbol,
  coloredPositive,
  coloredNegative,
  signed,
  decimalNumbers = 0,
  figureClassName,
  withCurrencySpacing
}) => (
  <div className={classNames(styles['FigureBlock'], className)}>
    <div className={labelStyle}>{label}</div>
    <Figure
      size="big"
      className={classNames(styles['FigureBlock-figure'], figureClassName)}
      total={total}
      symbol={symbol}
      coloredPositive={coloredPositive}
      coloredNegative={coloredNegative}
      signed={signed}
      decimalNumbers={decimalNumbers}
      withCurrencySpacing={withCurrencySpacing}
    />
  </div>
)

FigureBlock.propTypes = {
  /** Label of the figure */
  label: Types.string.isRequired,
  /** Extra classname */
  className: Types.string
}

export default FigureBlock
