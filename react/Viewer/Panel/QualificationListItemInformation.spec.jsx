import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import DemoProvider from '../docs/DemoProvider'

import QualificationListItemInformation, {
  makeInformationValue
} from './QualificationListItemInformation'
import MidEllipsis from '../../MidEllipsis'

const setup = ({
  formatedMetadataQualification = {},
  toggleActionsMenu = jest.fn()
} = {}) => {
  return render(
    <DemoProvider>
      <QualificationListItemInformation
        formatedMetadataQualification={formatedMetadataQualification}
        toggleActionsMenu={toggleActionsMenu}
        file={{
          metadata: { qualification: { label: 'label_of_qualification' } }
        }}
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
  describe('makeInformationValue', () => {
    let mockT
    beforeEach(() => {
      mockT = jest.fn(key => key)
    })
    afterEach(() => {
      mockT = jest.fn(key => key)
    })

    it('should return "MidEllipsis" component with the value', () => {
      const res = makeInformationValue({
        name: 'metadataName',
        value: 'metadataValue',
        t: mockT,
        scannerT: mockT
      })

      expect(res).toEqual(<MidEllipsis text="metadataValue" />)
    })
    it('should return value with suffix locale', () => {
      const res = makeInformationValue({
        name: 'noticePeriod',
        value: '88',
        t: mockT,
        scannerT: mockT
      })

      expect(res).toEqual('88 Viewer.panel.qualification.information.day')
    })
    it('should return "noInfo" value', () => {
      const res = makeInformationValue({
        name: 'metadataName',
        value: '',
        t: mockT,
        scannerT: mockT
      })

      expect(res).toEqual('Viewer.panel.qualification.noInfo')
    })
    it('should return noInfo value with "noticePeriod" metadata name', () => {
      const res = makeInformationValue({
        name: 'noticePeriod',
        value: '',
        t: mockT,
        scannerT: mockT
      })

      expect(res).toEqual('Viewer.panel.qualification.noInfo')
    })
  })
})
