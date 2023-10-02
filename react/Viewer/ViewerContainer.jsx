import React, { createRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useBreakpoints from '../providers/Breakpoints'
import { FileDoctype } from '../proptypes'

import Modal from '../Modal'
import { useCozyTheme } from '../providers/CozyTheme'
import { toolbarPropsPropType } from './proptypes'
import { isValidForPanel } from './helpers'
import Viewer from './Viewer'
import ViewerInformationsWrapper from './ViewerInformationsWrapper'
import EncryptedProvider from './providers/EncryptedProvider'
import { ViewerSnackbarProvider } from './providers/ViewerSnackbarProvider'
import ViewerSnackbar from './snackbar/ViewerSnackbar'
import { ActionMenuProvider } from './providers/ActionMenuProvider'

import styles from './styles.styl'

const ViewerContainer = props => {
  const {
    className,
    disableFooter,
    disablePanel,
    editPathByModelProps,
    children,
    componentsProps,
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

  const componentsPropsWithDefault = {
    ...componentsProps,
    toolbarProps: {
      showToolbar: true,
      showClose: true,
      ...componentsProps?.toolbarProps
    }
  }

  return (
    <ViewerSnackbarProvider>
      <ActionMenuProvider editPathByModelProps={editPathByModelProps}>
        <div
          id="viewer-wrapper"
          className={cx(styles['viewer-wrapper'], className)}
        >
          <EncryptedProvider url={currentURL}>
            <Viewer
              {...rest}
              componentsProps={componentsPropsWithDefault}
              currentFile={currentFile}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
              validForPanel={validForPanel}
              toolbarRef={toolbarRef}
            />
          </EncryptedProvider>
          <ViewerInformationsWrapper
            disableFooter={disableFooter}
            validForPanel={validForPanel}
            currentFile={currentFile}
            toolbarRef={toolbarRef}
          >
            {children}
          </ViewerInformationsWrapper>
        </div>
        <ViewerSnackbar />
      </ActionMenuProvider>
    </ViewerSnackbarProvider>
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
  /** Whether to show left and right arrows to navigate between files */
  showNavigation: PropTypes.bool,
  /** A render prop that is called when a file can't be displayed */
  renderFallbackExtraContent: PropTypes.func,
  /** Edit path by model properties */
  editPathByModelProps: PropTypes.shape({
    /** URL used to edit the file when editing a `information` type metadata (text, date) */
    information: PropTypes.string,
    /** URL used to edit the file when editing a `page` type metadata (side of the document) */
    page: PropTypes.string
  }),
  /** Show/Hide the panel containing more information about the file only on Desktop */
  disablePanel: PropTypes.bool,
  /** Show/Hide the panel containing more information about the file only on Phone & Tablet devices */
  disableFooter: PropTypes.bool,
  /* Props passed to components with the same name */
  componentsProps: PropTypes.shape({
    /** Used to open an Only Office file */
    OnlyOfficeViewer: PropTypes.shape({
      /** Whether Only Office is enabled on the server */
      isEnabled: PropTypes.bool,
      /** To open the Only Office file */
      opener: PropTypes.func
    }),
    /** Toolbar properties */
    toolbarProps: PropTypes.shape(toolbarPropsPropType)
  })
}

ViewerContainer.defaultProps = {
  currentIndex: 0,
  showNavigation: true
}

const ViewerContainerWrapper = ({ disableModal, ...props }) => {
  const cozyTheme = useCozyTheme()
  const { modalProps = { open: true } } = props.componentsProps || {}

  if (disableModal) {
    return <ViewerContainer {...props} />
  }

  return (
    <Modal {...modalProps} className={`CozyTheme--${cozyTheme}`}>
      {/* This div is needed for the Modal ref */}
      <div>
        <ViewerContainer {...props} />
      </div>
    </Modal>
  )
}

ViewerContainerWrapper.defaultProps = {
  componentsProps: {
    modalProps: {
      open: true
    }
  }
}

ViewerContainerWrapper.propTypes = {
  /** To avoid wrapping the Viewer with a Modal component */
  disableModal: PropTypes.bool,
  /** Props passed to Modal component */
  componentsProps: PropTypes.shape({
    modalProps: PropTypes.object
  })
}

export default ViewerContainerWrapper
