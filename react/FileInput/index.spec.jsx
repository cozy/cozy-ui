import { fireEvent, render, screen } from '@testing-library/react'
import uniqueId from 'lodash/uniqueId'
import React from 'react'

import FileInput from '.'

jest.mock('lodash/uniqueId')

describe('FileInput component', () => {
  const onChangeSpy = jest.fn()
  const pic1 = new File(['aaaa'], 'pic1.jpg')
  const pic2 = new File(['bbbb'], 'pic1.jpg')

  beforeEach(() => {
    jest.resetModules()
    uniqueId.mockReturnValue('file-input-123')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render a file selector', () => {
    render(
      <FileInput onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    )

    const button = screen.getByText('Click me')

    expect(button).toBeInTheDocument()
    expect(screen.getByTestId('file-input')).toBeInTheDocument()
  })

  it('should process selected file on change', () => {
    const filelist = [pic1]
    render(
      <FileInput accept="image/*" onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    )

    const input = screen.getByTestId('file-input')
    fireEvent.change(input, { target: { files: filelist } })

    expect(onChangeSpy).toHaveBeenCalledWith(pic1)
  })

  it('should process selected files on change if it is multiple', () => {
    const filelist = [pic1, pic2]
    render(
      <FileInput accept="image/*" multiple onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    )

    const input = screen.getByTestId('file-input')
    fireEvent.change(input, { target: { files: filelist } })

    expect(onChangeSpy).toHaveBeenCalledWith([pic1, pic2])
  })
})
