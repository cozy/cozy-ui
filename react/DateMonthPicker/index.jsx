import React, { useState } from 'react'
import PropTypes from 'prop-types'
import range from 'lodash/range'
import format from 'date-fns/format'
import cx from 'classnames'

import { useI18n } from '../providers/I18n'
import Icon from '../Icon'
import LeftIcon from '../Icons/Left'
import RightIcon from '../Icons/Right'

import styles from './styles.styl'

const MonthButton = ({ monthNum, onClick, isSelected }) => {
  const { f } = useI18n()
  // We do not care about year and day since we are creating the date
  // only to be able to format it into a monthName
  const d = new Date(2019, monthNum, 15)
  const handleClick = () => {
    onClick(monthNum)
  }
  return (
    <button
      className={cx(
        styles.DateMonthPicker__MonthButton,
        isSelected ? styles['DateMonthPicker__MonthButton--selected'] : null
      )}
      onClick={handleClick}
    >
      {f(d, 'MMM')}
    </button>
  )
}

const useCounter = (initialValue, min, max) => {
  const [state, setState] = useState(initialValue)
  const increment = () => setState(Math.min(state + 1, max))
  const decrement = () => setState(Math.max(state - 1, min))
  return [state, decrement, increment]
}

const DateMonthPicker = ({ initialValue, onSelect }) => {
  const [initialYear, initialMonth] = initialValue
    .split('-')
    .map(x => parseInt(x, 10))
  const [year, decreaseYear, increaseYear] = useCounter(
    parseInt(initialYear, 10),
    1990,
    Infinity
  )

  const handleClickMonth = month => {
    const d = new Date(year, month, 1)
    onSelect(format(d, 'YYYY-MM-DD'))
  }
  return (
    <div>
      <div className={styles.DateMonthPicker__YearControls}>
        <button
          className={styles.DateMonthPicker__YearButton}
          title={year - 1}
          onClick={decreaseYear}
        >
          <Icon icon={LeftIcon} />
        </button>
        <div className={cx(styles.DateMonthPicker__Year)}>{year}</div>
        <button
          className={styles.DateMonthPicker__YearButton}
          title={year + 1}
          onClick={increaseYear}
        >
          <Icon icon={RightIcon} />
        </button>
      </div>
      <div className={styles.DateMonthPicker__MonthGrid}>
        {range(0, 12).map(i => (
          <MonthButton
            key={i}
            isSelected={initialMonth - 1 === i && year == initialYear}
            monthNum={i}
            onClick={handleClickMonth}
          />
        ))}
      </div>
    </div>
  )
}

const dateMonthProp = function(props, propName, componentName) {
  if (!/^[0-9]{4}-[0-9]{2}$/.test(props[propName])) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '`. Should be in the form YYYY-MM.'
    )
  }
}

DateMonthPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
  initialValue: dateMonthProp
}

export default DateMonthPicker
