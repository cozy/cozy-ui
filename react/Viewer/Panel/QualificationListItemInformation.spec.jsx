import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import DemoProvider from '../docs/DemoProvider'

import QualificationListItemInformation from './QualificationListItemInformation'

const setup = ({
  formatedMetadataQualification = {},
  toggleActionsMenu = jest.fn()
} = {}) => {
  return render(
    <DemoProvider>
      <QualificationListItemInformation
        formatedMetadataQualification={formatedMetadataQualification}
        toggleActionsMenu={toggleActionsMenu}
      />
    </DemoProvider>
  )
}

describe('QualificationListItemInformation', () => {
  describe('formatedMetadataQualification', () => {
    it('should display default text if value is falsy', () => {
      const formatedMetadataQualification = { name: 'country', value: '' }
      const { getByText } = setup({ formatedMetadataQualification })

      expect(getByText('Viewer.panel.qualification.noInfo'))
    })
    it('should display current value if it is truthy', () => {
      const formatedMetadataQualification = { name: 'country', value: 'Italie' }
      const { queryByText } = setup({
        formatedMetadataQualification
      })

      expect(queryByText('Viewer.panel.qualification.noInfo')).toBeNull()
    })
  })
  describe('toggleActionsMenu', () => {
    it('should call toggleActionsMenu with current value on click it', () => {
      const formatedMetadataQualification = { name: 'country', value: 'Italie' }
      const toggleActionsMenu = jest.fn()
      const { getByTestId } = setup({
        toggleActionsMenu,
        formatedMetadataQualification
      })
      const toggleActionsMenuBtn = getByTestId('toggleActionsMenuBtn')
      fireEvent.click(toggleActionsMenuBtn)

      expect(toggleActionsMenu).toBeCalledWith('Italie')
    })
  })
})
