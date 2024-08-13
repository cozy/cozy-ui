import React, { useState } from 'react'

import { render, fireEvent } from '@testing-library/react'

import Radio from '.'
import RadioGroup from '../../RadioGroup'
import FormControlLabel from '../../FormControlLabel'

const RadioGroupComponent = ({ radioOnChange, radioName }) => {
  const [radioValue, setRadioValue] = useState('item1')

  const onChange = event => {
    setRadioValue(event.target.value)
  }

  return (
    <RadioGroup
      name="RadioGroupName"
      value={radioValue.toString()}
      onChange={onChange}
    >
      <FormControlLabel
        value="item1"
        control={
          <Radio
            data-testid="radio1"
            onChange={radioOnChange}
            name={radioName}
          />
        }
        label="Item 1"
      />
      <FormControlLabel
        value="item2"
        control={
          <Radio
            data-testid="radio2"
            onChange={radioOnChange}
            name={radioName}
          />
        }
        label="Item 2"
      />
      <FormControlLabel
        value="item3"
        control={
          <Radio
            data-testid="radio3"
            onChange={radioOnChange}
            name={radioName}
          />
        }
        label="Item 3"
      />
    </RadioGroup>
  )
}

xdescribe('Radio', () => {
  it('should render the component', async () => {
    const { container } = render(<Radio />)

    expect(container.querySelector('input[type=radio]')).toBeInTheDocument()
  })

  it(`should handle a 'onChange' prop`, async () => {
    const onChange = jest.fn()
    const { container } = render(<Radio onChange={onChange} />)

    const input = container.querySelector('input[type=radio]')
    fireEvent.click(input)

    expect(input).toBeInTheDocument()
    expect(onChange).toHaveBeenCalled()
    expect(input.checked).toBeTruthy()
  })

  it(`should handle a 'name' prop`, async () => {
    const { container } = render(<Radio name={'hello'} />)

    const input = container.querySelector('input[type=radio]')

    expect(input.name).toBe('hello')
  })

  it('should handle a disabled prop', async () => {
    const onClick = jest.fn()
    const { container } = render(<Radio onClick={onClick} disabled={true} />)

    const input = container.querySelector('input[type=radio]')
    expect(input.checked).toBeFalsy()

    // here fireEvent.click(input) cannot be used due to a bug on the testing tools
    // so input.click() is used instead
    // more info at https://github.com/testing-library/dom-testing-library/issues/92
    input.click()

    expect(input).toBeInTheDocument()
    expect(onClick).not.toHaveBeenCalled()
    expect(input.checked).toBeFalsy()
  })

  it('should handle being in a RadioGroup', async () => {
    const { queryByTestId } = render(<RadioGroupComponent />)

    const radio1 = queryByTestId('radio1')
    const radio2 = queryByTestId('radio2')
    const radio3 = queryByTestId('radio3')

    fireEvent.click(radio2)
    expect(radio1.checked).toBeFalsy()
    expect(radio2.checked).toBeTruthy()
    expect(radio3.checked).toBeFalsy()

    fireEvent.click(radio3)
    expect(radio1.checked).toBeFalsy()
    expect(radio2.checked).toBeFalsy()
    expect(radio3.checked).toBeTruthy()
  })

  it(`should get the name of the parent's RadioGroup`, async () => {
    const { queryByTestId } = render(<RadioGroupComponent />)

    const radio1 = queryByTestId('radio1')
    const radio2 = queryByTestId('radio2')
    const radio3 = queryByTestId('radio3')

    expect(radio1.name).toBe('RadioGroupName')
    expect(radio2.name).toBe('RadioGroupName')
    expect(radio3.name).toBe('RadioGroupName')
  })

  it(`should handle 'name' prop over RadioGroup's 'name'`, async () => {
    const { queryByTestId } = render(
      <RadioGroupComponent radioName="NameOverride" />
    )

    const radio1 = queryByTestId('radio1')
    const radio2 = queryByTestId('radio2')
    const radio3 = queryByTestId('radio3')

    expect(radio1.name).toBe('NameOverride')
    expect(radio2.name).toBe('NameOverride')
    expect(radio3.name).toBe('NameOverride')
  })

  it(`should handle 'onChange' prop over RadioGroup's 'onChange'`, async () => {
    const onClick = jest.fn()

    const { queryByTestId } = render(
      <RadioGroupComponent radioOnChange={onClick} />
    )

    const radio1 = queryByTestId('radio1')
    const radio2 = queryByTestId('radio2')
    const radio3 = queryByTestId('radio3')

    fireEvent.click(radio2)
    expect(onClick).toHaveBeenCalledTimes(1)

    // expected state is default selection to item1
    expect(radio1.checked).toBeTruthy()
    expect(radio2.checked).toBeFalsy()
    expect(radio3.checked).toBeFalsy()

    fireEvent.click(radio3)
    expect(onClick).toHaveBeenCalledTimes(2)

    // expected state is default selection to item1
    expect(radio1.checked).toBeTruthy()
    expect(radio2.checked).toBeFalsy()
    expect(radio3.checked).toBeFalsy()
  })
})
