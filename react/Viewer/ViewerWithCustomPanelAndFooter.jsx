import React, { createRef } from 'react'

import useBreakpoints from '../hooks/useBreakpoints'

import ViewerWrapper from './ViewerWrapper'
import InformationPanel from './InformationPanel'
import Footer from './Footer'
import Viewer from './Viewer'

const ViewerWithCustomPanelAndFooter = props => {
  console.warn(
    'Warning: Please do not use the "ViewerWithCustomPanelAndFooter" Component, replace it with the default export component'
  )
  const { footerProps, panelInfoProps, ...rest } = props
  const { files, currentIndex } = props
  const fileCount = files.length
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < fileCount - 1
  const { isDesktop } = useBreakpoints()
  const toolbarRef = createRef()
  const currentFile = files[currentIndex]

  const showInfoPanel =
    isDesktop &&
    panelInfoProps &&
    panelInfoProps.showPanel({ file: currentFile })

  return (
    <ViewerWrapper>
      <Viewer
        {...rest}
        disablePanel={true}
        disableFooter={true}
        currentFile={currentFile}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        validForPanel={showInfoPanel}
        toolbarRef={toolbarRef}
      />
      <Footer>
        <footerProps.FooterContent file={currentFile} toolbarRef={toolbarRef} />
      </Footer>
      {showInfoPanel && (
        <InformationPanel>
          <panelInfoProps.PanelContent file={currentFile} />
        </InformationPanel>
      )}
    </ViewerWrapper>
  )
}

export default ViewerWithCustomPanelAndFooter
