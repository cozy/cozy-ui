import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import QualificationListItemInformation from './QualificationListItemInformation'

jest.mock('../../providers/I18n', () => ({
  useI18n: jest.fn(() => ({ t: x => x }))
}))

const setup = ({
  formattedMetadataQualification = {},
  toggleActionsMenu = jest.fn()
} = {}) => {
  return render(
    <QualificationListItemInformation
      formattedMetadataQualification={formattedMetadataQualification}
      toggleActionsMenu={toggleActionsMenu}
      file={{
        metadata: { qualification: { label: 'label_of_qualification' } }
      }}
    />
  )
}

describe('QualificationListItemInformation', () => {
  describe('formattedMetadataQualification', () => {
    it('should display default text if value is falsy', () => {
      const formattedMetadataQualification = { name: 'country', value: '' }
      const { getByText } = setup({ formattedMetadataQualification })

      expect(getByText('No information'))
    })
    it.only('should display current value if it is truthy', () => {
      const formattedMetadataQualification = {
        name: 'country',
        value: 'Italie'
      }
      const { queryByText } = setup({
        formattedMetadataQualification
      })

      expect(queryByText('No information')).toBeNull()
      expect(queryByText('Italie')).toBeInTheDocument()
    })
    it('should display current value if it number type', () => {
      const formattedMetadataQualification = { name: 'country', value: 0 }
      const { queryByText } = setup({
        formattedMetadataQualification
      })

      expect(queryByText('No information')).toBeNull()
      expect(queryByText('0')).toBeInTheDocument()
    })
  })
  describe('toggleActionsMenu', () => {
    it('should call toggleActionsMenu with current value on click it', () => {
      const formattedMetadataQualification = {
        name: 'country',
        value: 'Italie'
      }
      const toggleActionsMenu = jest.fn()
      const { getByTestId } = setup({
        toggleActionsMenu,
        formattedMetadataQualification
      })
      const toggleActionsMenuBtn = getByTestId('toggleActionsMenuBtn')
      fireEvent.click(toggleActionsMenuBtn)

      expect(toggleActionsMenu).toBeCalledWith('Italie')
    })
  })
})
