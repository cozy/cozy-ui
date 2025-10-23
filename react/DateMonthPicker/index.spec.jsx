import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import DateMonthPicker from '.'
import I18n from '../providers/I18n'

describe('DateMonthPicker', () => {
  const setup = ({ initialValue }) => {
    const handleSelect = jest.fn()
    const root = render(
      <I18n lang="en" dictRequire={() => {}}>
        <DateMonthPicker initialValue={initialValue} onSelect={handleSelect} />
      </I18n>
    )
    return { root, handleSelect }
  }

  it('should be able to select a month', async () => {
    const { handleSelect } = setup({ initialValue: '2015-08' })
    const februaryButton = screen.getByText('Feb')
    fireEvent.click(februaryButton)
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('2015-02-01')
  })

  it('should be able to go to previous year', async () => {
    const { handleSelect } = setup({ initialValue: '2015-08' })
    // Left arrow to go to previous year is first button
    const previousYearButton = screen.getAllByRole('button')[0]
    fireEvent.click(previousYearButton)
    const februaryButton = screen.getByText('Feb')
    fireEvent.click(februaryButton)
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('2014-02-01')
  })

  it('should be able to go to next year', async () => {
    const { handleSelect } = setup({ initialValue: '2015-08' })
    // Right arrow to go to next year is first button
    const nextYearButton = screen.getAllByRole('button')[1]
    fireEvent.click(nextYearButton)
    const februaryButton = screen.getByText('Feb')
    fireEvent.click(februaryButton)
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('2016-02-01')
  })
})
