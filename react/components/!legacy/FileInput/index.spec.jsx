import React from 'react'
import uniqueId from 'lodash/uniqueId'

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
    const component = shallow(
      <FileInput onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render a default file selector', () => {
    const component = shallow(
      <FileInput hidden={false} onChange={onChangeSpy} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should render a disabled file selector', () => {
    const component = shallow(
      <FileInput disabled onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should pass props to the input', () => {
    const component = shallow(
      <FileInput accept="image/*" onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should process selected file on change', () => {
    const filelist = [pic1]
    const component = shallow(
      <FileInput accept="image/*" onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    )
    component.find('input').simulate('change', {
      target: {
        files: filelist
      }
    })
    expect(onChangeSpy).toHaveBeenCalledWith(pic1)
  })

  it('should process selected files on change if it is multiple', () => {
    const filelist = [pic1, pic2]
    const component = shallow(
      <FileInput accept="image/*" multiple onChange={onChangeSpy}>
        <span>Click me</span>
      </FileInput>
    )
    component.find('input').simulate('change', {
      target: {
        files: filelist
      }
    })
    expect(onChangeSpy).toHaveBeenCalledWith([pic1, pic2])
  })
})
