import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Icon from '../Icon'
import { translate } from '../I18n'
import range from 'lodash/range'
import { format } from 'date-fns'
import styles from './styles.styl'
import cx from 'classnames'

const MonthButton = translate()(({ monthNum, f, onClick, isSelected }) => {
  const d = new Date(2019, monthNum, 15)
  const handleClick = () => {
    onClick(monthNum)
  }
  return (
    <Button
      theme="secondary"
      className={cx(
        styles.DateMonthPicker__MonthButton,
        isSelected ? styles.ValueSelected : null
      )}
      onClick={handleClick}
      label={f(d, 'MMM')}
    />
  )
})

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
    <>
      <div className={styles.DateMonthPicker__YearControls}>
        <Button
          className={styles.DateMonthPicker__YearButton}
          theme="secondary"
          size="small"
          label=""
          onClick={decreaseYear}
          icon={<Icon icon="left" />}
        />
        <div
          className={cx(
            styles.DateMonthPicker__Year,
            year === initialYear && styles.ValueSelected
          )}
        >
          {year}
        </div>
        <Button
          className={styles.DateMonthPicker__YearButton}
          theme="secondary"
          size="small"
          label=""
          onClick={increaseYear}
          icon={<Icon icon="right" />}
        />
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
    </>
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
