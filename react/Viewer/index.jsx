import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { isMobileApp, isMobile as isMobileDevice } from 'cozy-device-helper'

import withBreakpoints from '../helpers/withBreakpoints'
import { FileDoctype } from '../proptypes'

import ViewerWrapper from './ViewerWrapper'
import ViewerControls from './ViewerControls'
import ImageViewer from './ImageViewer'
import AudioViewer from './AudioViewer'
import VideoViewer from './VideoViewer'
import PdfJsViewer from './PdfJsViewer'
import TextViewer from './TextViewer'
import NoViewer from './NoViewer'
import ShortcutViewer from './ShortcutViewer'
import InformationPanel from './InformationPanel'

const KEY_CODE_LEFT = 37
const KEY_CODE_RIGHT = 39
const KEY_CODE_ESCAPE = 27

export const isPlainText = (mimeType = '', fileName = '') => {
  return mimeType ? /^text\//.test(mimeType) : /\.(txt|md)$/.test(fileName)
}

export const getViewerComponentName = file => {
  switch (file.class) {
    case 'shortcut':
      return ShortcutViewer
    case 'image':
      return ImageViewer
    case 'audio':
      return AudioViewer
    case 'video':
      return isMobileDevice() ? NoViewer : VideoViewer
    case 'pdf':
      return PdfJsViewer
    case 'text':
      return isPlainText(file.mime, file.name) ? TextViewer : NoViewer
    default:
      return NoViewer
  }
}

export class Viewer extends Component {
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

  renderViewer(file) {
    if (!file) return null
    const { renderFallbackExtraContent } = this.props
    const ComponentName = getViewerComponentName(file)
    return (
      <ComponentName
        file={file}
        onClose={this.onClose}
        renderFallbackExtraContent={renderFallbackExtraContent}
      />
    )
  }

  render() {
    const {
      files,
      className,
      currentIndex,
      dark,
      toolbarProps,
      panelInfoProps,
      showNavigation,
      breakpoints: { isDesktop }
    } = this.props
    const currentFile = files[currentIndex]
    const fileCount = files.length
    const hasPrevious = currentIndex > 0
    const hasNext = currentIndex < fileCount - 1
    // this `expanded` property makes the next/previous controls cover the displayed image
    const expanded = currentFile && currentFile.class === 'image'
    const showInfoPanel =
      isDesktop &&
      panelInfoProps &&
      panelInfoProps.showPanel({ file: currentFile })

    return (
      <ViewerWrapper className={className} dark={dark}>
        <ViewerControls
          file={currentFile}
          onClose={this.onClose}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onPrevious={this.onPrevious}
          onNext={this.onNext}
          isMobile={isMobileDevice()}
          expanded={expanded}
          toolbarProps={toolbarProps}
          showNavigation={showNavigation}
          isMobileApp={isMobileApp()}
          showInfoPanel={showInfoPanel}
        >
          {this.renderViewer(currentFile)}
        </ViewerControls>
        {showInfoPanel && (
          <InformationPanel>
            <panelInfoProps.PanelContent file={currentFile} />
          </InformationPanel>
        )}
      </ViewerWrapper>
    )
  }
}

export const toolbarPropsPropType = {
  /** Whether to show the toolbar or not. Note that the built-in close button is in the toolbar. */
  showToolbar: PropTypes.bool,
  /** Whether to show close button in toolbar */
  showClose: PropTypes.bool
}

Viewer.propTypes = {
  /** One or more `io.cozy.files` to display */
  files: PropTypes.arrayOf(FileDoctype).isRequired,
  /** Index of the file to show */
  currentIndex: PropTypes.number,
  className: PropTypes.string,
  /** Called when the user wants to leave the Viewer */
  onCloseRequest: PropTypes.func,
  /** Called with (nextFile, nextIndex) when the user requests to navigate to another file */
  onChangeRequest: PropTypes.func,
  /** Switch between light and dark mode */
  dark: PropTypes.bool,
  toolbarProps: PropTypes.shape(toolbarPropsPropType),
  /** Whether to show left and right arrows to navigate between files */
  showNavigation: PropTypes.bool,
  /** A render prop that is called when a file can't be displayed */
  renderFallbackExtraContent: PropTypes.func,
  panelInfoProps: PropTypes.shape({
    /** Whether to show the panel containing more information about the file */
    showPanel: PropTypes.func,
    /** Content to be shown  */
    PanelContent: PropTypes.func
  })
}

Viewer.defaultProps = {
  currentIndex: 0,
  dark: true,
  toolbarProps: { showToolbar: true, showClose: true },
  showNavigation: true,
  panelInfoProps: { showPanel: () => false }
}

export default withBreakpoints()(Viewer)
