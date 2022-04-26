import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import useBreakpoints from '../hooks/useBreakpoints'
import { FileDoctype } from '../proptypes'

import { toolbarPropsPropType } from './proptypes'
import { isValidForPanel } from './helpers'
import ViewerWrapper from './ViewerWrapper'
import Viewer from './Viewer'
import ViewerInformationsWrapper from './ViewerInformationsWrapper'

const ViewerContainer = props => {
  const {
    className,
    disableFooter,
    disablePanel,
    disableSharing,
    ...rest
  } = props
  const { currentIndex, files, currentURL } = props
  const toolbarRef = createRef()
  const { isDesktop } = useBreakpoints()
  const currentFile = files[currentIndex]
  const fileCount = files.length
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < fileCount - 1
  const validForPanel =
    isValidForPanel({ file: currentFile }) && isDesktop && !disablePanel

  return (
    <ViewerWrapper className={className}>
      <Viewer
        {...rest}
        currentFile={currentFile}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        validForPanel={validForPanel}
        toolbarRef={toolbarRef}
        currentURL={currentURL}
      />
      <ViewerInformationsWrapper
        disableFooter={disableFooter}
        disableSharing={disableSharing}
        validForPanel={validForPanel}
        currentFile={currentFile}
        toolbarRef={toolbarRef}
      />
    </ViewerWrapper>
  )
}

ViewerContainer.propTypes = {
  /** One or more `io.cozy.files` to display */
  files: PropTypes.arrayOf(FileDoctype).isRequired,
  /** Index of the file to show */
  currentIndex: PropTypes.number,
  /** Optionnal URL of the file */
  currentURL: PropTypes.string,
  className: PropTypes.string,
  /** Called when the user wants to leave the Viewer */
  onCloseRequest: PropTypes.func,
  /** Called with (nextFile, nextIndex) when the user requests to navigate to another file */
  onChangeRequest: PropTypes.func,
  toolbarProps: PropTypes.shape(toolbarPropsPropType),
  /** Whether to show left and right arrows to navigate between files */
  showNavigation: PropTypes.bool,
  /** A render prop that is called when a file can't be displayed */
  renderFallbackExtraContent: PropTypes.func,
  /** Used to open an Only Office file */
  onlyOfficeProps: PropTypes.shape({
    /** Whether Only Office is enabled on the server */
    isEnabled: PropTypes.bool,
    /** To open the Only Office file */
    opener: PropTypes.func
  }),
  /** Show/Hide the panel containing more information about the file only on Desktop */
  disablePanel: PropTypes.bool,
  /** Show/Hide the panel containing more information about the file only on Phone & Tablet devices */
  disableFooter: PropTypes.bool,
  /** Show/Hide cozy share button  */
  disableSharing: PropTypes.bool
}

ViewerContainer.defaultProps = {
  currentIndex: 0,
  toolbarProps: { showToolbar: true, showClose: true },
  showNavigation: true
}

export default ViewerContainer
