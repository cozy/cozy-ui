import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import filesize from 'filesize'

import DemoProvider from './docs/DemoProvider'
import FilePickerBodyItem from './FilePickerBodyItem'

const mockFile01 = {
  _id: '001',
  type: 'file',
  name: 'Filename',
  updated_at: '2021-01-01T12:00:00.000000+01:00'
}
const mockFolder01 = {
  _id: '002',
  type: 'directory',
  name: 'Foldername',
  updated_at: '2021-01-01T12:00:00.000000+01:00'
}

jest.mock('filesize', () => jest.fn())

describe('FilePickerBodyItem components:', () => {
  const mockHandleChoiceClick = jest.fn()
  const mockHandleListItemClick = jest.fn()
  filesize.mockReturnValue('111Ko')

  const setup = ({
    file = mockFile01,
    multiple = false,
    fileTypesAccepted = { file: true, folder: false }
  }) => {
    return render(
      <DemoProvider>
        <FilePickerBodyItem
          file={file}
          fileTypesAccepted={fileTypesAccepted}
          multiple={multiple}
          handleChoiceClick={mockHandleChoiceClick}
          handleListItemClick={mockHandleListItemClick}
          filesIdsSelected={[]}
          hasDivider={false}
        />
      </DemoProvider>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be rendered correctly', () => {
    const { container } = setup({})

    expect(container).toBeDefined()
  })

  it('should display filename', () => {
    const { getByText } = setup({})

    expect(getByText('Filename'))
  })

  it('should display foldername', () => {
    const { getByText } = setup({ file: mockFolder01 })

    expect(getByText('Foldername'))
  })

  describe('Functions called', () => {
    it('should call "handleChoiceClick" function when click on checkbox/radio area', () => {
      const { getByTestId } = setup({})
      fireEvent.click(getByTestId('choice-onclick'))

      expect(mockHandleChoiceClick).toHaveBeenCalled()
    })

    it('should NOT call "handleChoiceClick" function when click on checkbox/radio area, if is Folder & not accepted', () => {
      const { getByTestId } = setup({ file: mockFolder01 })
      fireEvent.click(getByTestId('choice-onclick'))

      expect(mockHandleChoiceClick).not.toHaveBeenCalled()
    })
    it('should NOT call "handleChoiceClick" function when click on checkbox/radio area, if is File & not accepted', () => {
      const { getByTestId } = setup({
        fileTypesAccepted: { file: false, folder: true }
      })
      fireEvent.click(getByTestId('choice-onclick'))

      expect(mockHandleChoiceClick).not.toHaveBeenCalled()
    })

    it('should call "handleListItemClick" function when click on ListItem node', () => {
      const { getByTestId } = setup({})
      fireEvent.click(getByTestId('listitem-onclick'))

      expect(mockHandleListItemClick).toHaveBeenCalled()
    })
  })

  describe('Attribute "multiple"', () => {
    it('should radio button exists if "multiple" atribute is False', () => {
      const { getByTestId } = setup({})
      const radioBtn = getByTestId('radio-btn')
      expect(radioBtn).not.toBeNull()
    })

    it('should checkbox button exists if "multiple" atribute is True', () => {
      const { getByTestId } = setup({ multiple: true })
      const checkboxBtn = getByTestId('checkbox-btn')
      expect(checkboxBtn).not.toBeNull()
    })
  })

  describe('Radio/Checkbox button', () => {
    it('should disable and not display the Radio button if it is a File and is not accepted', () => {
      const { getByTestId } = setup({
        fileTypesAccepted: { file: false }
      })
      const radioBtn = getByTestId('radio-btn')

      expect(radioBtn.getAttribute('disabled')).toBe('')
    })
    it('should disable and not display the Radio button if it is a Folder and is not accepted', () => {
      const { getByTestId } = setup({ file: mockFolder01 })
      const radioBtn = getByTestId('radio-btn')

      expect(radioBtn.getAttribute('disabled')).toBe('')
    })
  })
})
