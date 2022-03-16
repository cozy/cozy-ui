import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

import useBreakpoints from '../hooks/useBreakpoints'
import { FileDoctype } from '../proptypes'

import ViewerWrapper from './ViewerWrapper'
import ViewerControls from './ViewerControls'
import InformationPanel from './InformationPanel'
import Footer from './Footer'
import ViewerByFile from './ViewerByFile'
import { isValidForPanel } from './helpers'
import PanelContent from './Panel/PanelContent'
import FooterContent from './Footer/FooterContent'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const KEY_CODE_LEFT = 37
const KEY_CODE_RIGHT = 39
const KEY_CODE_ESCAPE = 27

export class Viewer extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp, false)
  }

  onKeyUp = e => {
    if (e.keyCode === KEY_CODE_LEFT) this.onPrevious()
    else if (e.keyCode === KEY_CODE_RIGHT) this.onNext()
    else if (e.keyCode === KEY_CODE_ESCAPE) this.onClose()
  }

  onNext = () => {
    const { files, currentIndex } = this.props
    if (currentIndex === files.length - 1) {
      return
    }
    const nextIndex = currentIndex + 1
    const nextFile = files[nextIndex]
    this.onChange(nextFile, nextIndex)
  }

  onPrevious = () => {
    const { files, currentIndex } = this.props
    if (currentIndex === 0) {
      return
    }
    const prevIndex = currentIndex - 1
    const prevFile = files[prevIndex]
    this.onChange(prevFile, prevIndex)
  }

  onClose = () => {
    if (this.props.onCloseRequest) {
      this.props.onCloseRequest()
    }
  }

  onChange(nextFile, nextIndex) {
    if (this.props.onChangeRequest) {
      this.props.onChangeRequest(nextFile, nextIndex)
    }
  }

  render() {
    const {
      currentFile,
      hasPrevious,
      hasNext,
      toolbarProps,
      toolbarRef,
      showNavigation,
      renderFallbackExtraContent,
      validForPanel,
      onlyOfficeProps
    } = this.props

    // this `expanded` property makes the next/previous controls cover the displayed image
    const expanded = currentFile && currentFile.class === 'image'

    return (
      <>
        <ViewerControls
          file={currentFile}
          onClose={this.onClose}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onPrevious={this.onPrevious}
          onNext={this.onNext}
          expanded={expanded}
          toolbarProps={{ ...toolbarProps, toolbarRef }}
          showNavigation={showNavigation}
          showInfoPanel={validForPanel}
        >
          <ViewerByFile
            file={currentFile}
            onClose={this.onClose}
            renderFallbackExtraContent={renderFallbackExtraContent}
            onlyOfficeProps={onlyOfficeProps}
          />
        </ViewerControls>
      </>
    )
  }
}

export const toolbarPropsPropType = {
  /** Whether to show the toolbar or not. Note that the built-in close button is in the toolbar. */
  showToolbar: PropTypes.bool,
  /** Whether to show close button in toolbar */
  showClose: PropTypes.bool,
  toolbarRef: PropTypes.object
}

Viewer.propTypes = {
  /** One `io.cozy.files` to display */
  currentFile: FileDoctype.isRequired,
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  /** Called when the user wants to leave the Viewer */
  onCloseRequest: PropTypes.func,
  /** Called with (nextFile, nextIndex) when the user requests to navigate to another file */
  onChangeRequest: PropTypes.func,
  toolbarProps: PropTypes.shape(toolbarPropsPropType),
  toolbarRef: PropTypes.object,
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
  validForPanel: PropTypes.bool
}

const ViewerInformationsWrapper = ({
  currentFile,
  disableFooter,
  disableSharing,
  validForPanel,
  toolbarRef
}) => {
  useSetFlagshipUI(
    {
      bottomBackground: 'background.paper',
      bottomTheme: 'dark'
    },
    {
      bottomBackground: 'background.default'
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

export const ViewerContainer = props => {
  const {
    className,
    disableFooter,
    disablePanel,
    disableSharing,
    ...rest
  } = props
  const { currentIndex, files } = props
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

export const ViewerWithCustomPanelAndFooter = props => {
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

export default ViewerContainer
