import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'

import { FileDoctype } from '../proptypes'

import InformationPanel from './components/InformationPanel'
import Footer from './components/Footer'
import PanelContent from './Panel/PanelContent'
import FooterContent from './Footer/FooterContent'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const ViewerInformationsWrapper = ({
  currentFile,
  disableFooter,
  validForPanel,
  toolbarRef,
  children
}) => {
  const theme = useTheme()
  const sidebar = document.querySelector('[class*="sidebar"]')

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.paper,
      bottomTheme: 'dark'
    },
    {
      bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper']
    }
  )

  return (
    <>
      {!disableFooter && (
        <Footer>
          <FooterContent file={currentFile} toolbarRef={toolbarRef}>
            {children}
          </FooterContent>
        </Footer>
      )}
      {validForPanel && (
        <InformationPanel>
          <PanelContent file={currentFile} />
        </InformationPanel>
      )}
    </>
  )
}

ViewerInformationsWrapper.propTypes = {
  currentFile: FileDoctype.isRequired,
  disableFooter: PropTypes.bool,
  validForPanel: PropTypes.bool,
  toolbarRef: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default ViewerInformationsWrapper
