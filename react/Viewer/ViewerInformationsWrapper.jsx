import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'

import { FileDoctype } from '../proptypes'

import InformationPanel from './components/InformationPanel'
import Footer from './components/Footer'
import PanelContent from './Panel/PanelContent'
import FooterContent from './Footer/FooterContent'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'
import { useCozyTheme } from '../providers/CozyTheme'

const ViewerInformationsWrapper = ({
  currentFile,
  disableFooter,
  validForPanel,
  toolbarRef,
  isPublic,
  children
}) => {
  const theme = useTheme()
  const { isLight } = useCozyTheme()
  const sidebar = document.querySelector('[class*="sidebar"]')

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.paper,
      bottomTheme: isLight ? 'dark' : 'light'
    },
    {
      bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper']
    }
  )

  return (
    <>
      {!disableFooter && (
        <Footer>
          <FooterContent
            file={currentFile}
            toolbarRef={toolbarRef}
            isPublic={isPublic}
          >
            {children}
          </FooterContent>
        </Footer>
      )}
      {validForPanel && (
        <InformationPanel>
          <PanelContent file={currentFile} isPublic={isPublic} />
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
  isPublic: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default ViewerInformationsWrapper
