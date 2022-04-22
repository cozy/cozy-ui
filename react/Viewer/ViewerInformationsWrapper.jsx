import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'

import { FileDoctype } from '../proptypes'

import InformationPanel from './InformationPanel'
import Footer from './Footer'
import PanelContent from './Panel/PanelContent'
import FooterContent from './Footer/FooterContent'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const ViewerInformationsWrapper = ({
  currentFile,
  disableFooter,
  disableSharing,
  validForPanel,
  toolbarRef
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
          <FooterContent
            file={currentFile}
            toolbarRef={toolbarRef}
            disableSharing={disableSharing}
          />
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
  disableSharing: PropTypes.bool,
  validForPanel: PropTypes.bool,
  toolbarRef: PropTypes.object
}

export default ViewerInformationsWrapper
