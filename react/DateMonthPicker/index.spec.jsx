import { mount } from 'enzyme'
import React from 'react'
import DateMonthPicker from '.'
import { act } from 'react-dom/test-utils'

import I18n from '../providers/I18n'
import LeftIcon from '../Icons/Left'
import RightIcon from '../Icons/Right'

const findButtonWithLabel = (root, label) =>
  root.findWhere(n => n.type() == 'button' && n.props().children === label)

const findButtonWithIcon = (root, iconName) =>
  root.findWhere(n => {
    const props = n.props()
    if (n.type() !== 'button') {
      return
    }
    if (!props.children || !props.children.length > 1) {
      return
    }

    return (
      props.children.props &&
      props.children.props.icon &&
      props.children.props.icon == iconName
    )
  })

describe('DateMonthPicker', () => {
  const setup = ({ initialValue }) => {
    const handleSelect = jest.fn()
    const root = mount(
      <I18n lang="en" dictRequire={() => {}}>
        <DateMonthPicker initialValue={initialValue} onSelect={handleSelect} />
      </I18n>
    )
    return { root, handleSelect }
  }

  it('should be able to select a month', async () => {
    const { root, handleSelect } = setup({ initialValue: '2015-08' })
    const februaryButton = findButtonWithLabel(root, 'Feb')
    expect(februaryButton.length).toBe(1)
    februaryButton.props().onClick()
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('2015-02-01')
  })

  it('should be able to go to previous year', async () => {
    const { root, handleSelect } = setup({ initialValue: '2015-08' })
    const prevYearButton = findButtonWithIcon(root, LeftIcon)
    act(() => {
      prevYearButton.props().onClick()
    })
    root.update()
    const februaryButton = findButtonWithLabel(root, 'Feb')
    februaryButton.props().onClick()
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('2014-02-01')
  })

  it('should be able to go to next year', async () => {
    const { root, handleSelect } = setup({ initialValue: '2015-08' })
    const nextYearButton = findButtonWithIcon(root, RightIcon)
    act(() => {
      nextYearButton.props().onClick()
    })
    root.update()
    const februaryButton = findButtonWithLabel(root, 'Feb')
    februaryButton.props().onClick()
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('2016-02-01')
  })
})
