import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FileDoctype } from '../proptypes'

import ViewerControls from './ViewerControls'
import ViewerByFile from './ViewerByFile'
import { toolbarPropsPropType } from './index'

const KEY_CODE_LEFT = 37
const KEY_CODE_RIGHT = 39
const KEY_CODE_ESCAPE = 27

class Viewer extends Component {
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
      currentURL,
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
          url={currentURL}
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
            url={currentURL}
            onClose={this.onClose}
            renderFallbackExtraContent={renderFallbackExtraContent}
            onlyOfficeProps={onlyOfficeProps}
          />
        </ViewerControls>
      </>
    )
  }
}

Viewer.propTypes = {
  /** One `io.cozy.files` to display */
  currentFile: FileDoctype.isRequired,
  /** Optionnal URL of the file */
  currentURL: PropTypes.string,
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

export default Viewer
