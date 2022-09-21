import React from 'react'
import { render } from '@testing-library/react'

import ViewerInformationsWrapper from './ViewerInformationsWrapper'

/* eslint-disable react/display-name */
jest.mock('./components/Footer', () => ({ children }) => (
  <div data-testid="Footer">{children}</div>
))
jest.mock('./components/InformationPanel', () => ({ children }) => (
  <div data-testid="InformationPanel">{children}</div>
))
jest.mock('./Panel/PanelContent', () => () => (
  <div data-testid="PanelContent" />
))
jest.mock('./Footer/FooterContent', () => () => (
  <div data-testid="FooterContent" />
))
/* eslint-enable react/display-name */

const setup = ({ validForPanel, disableFooter } = {}) => {
  return render(
    <ViewerInformationsWrapper
      currentFile={{}}
      disableFooter={disableFooter}
      validForPanel={validForPanel}
    />
  )
}

describe('ViewerInformationsWrapper', () => {
  describe('disableFooter', () => {
    it('should render FooterContent components', () => {
      const { getByTestId } = setup({ disableFooter: false })

      expect(getByTestId('Footer'))
      expect(getByTestId('FooterContent'))
    })

    it('should not render FooterContent components', () => {
      const { queryByTestId } = setup({ disableFooter: true })

      expect(queryByTestId('Footer')).toBeNull()
      expect(queryByTestId('FooterContent')).toBeNull()
    })
  })

  describe('validForPanel', () => {
    it('should render InformationPanel & PanelContent components', () => {
      const { getByTestId } = setup({ validForPanel: true })

      expect(getByTestId('InformationPanel'))
      expect(getByTestId('PanelContent'))
    })

    it('should not render InformationPanel & PanelContent components', () => {
      const { queryByTestId } = setup({ validForPanel: false })

      expect(queryByTestId('InformationPanel')).toBeNull()
      expect(queryByTestId('PanelContent')).toBeNull()
    })
  })
})
