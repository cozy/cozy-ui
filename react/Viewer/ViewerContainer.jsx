import React, { createRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useBreakpoints from '../providers/Breakpoints'
import { FileDoctype } from '../proptypes'
import { useExtendI18n } from '../providers/I18n'
import { useCozyTheme } from '../providers/CozyTheme'
import Modal from '../Modal'

import { toolbarPropsPropType } from './proptypes'
import { isValidForPanel } from './helpers'
import Viewer from './Viewer'
import ViewerInformationsWrapper from './ViewerInformationsWrapper'
import EncryptedProvider from './providers/EncryptedProvider'
import AlertProvider from '../providers/Alert'
import { ActionMenuProvider } from './providers/ActionMenuProvider'
import { locales } from './locales'
import styles from './styles.styl'

const ViewerContainer = props => {
  const {
    className,
    disableFooter,
    disablePanel,
    editPathByModelProps,
    children,
    componentsProps,
    isPublic,
    ...rest
  } = props
  const { currentIndex, files, currentURL } = props
  const toolbarRef = createRef()
  const { isDesktop } = useBreakpoints()
  useExtendI18n(locales)
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
    <AlertProvider>
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
            >
              {children}
            </Viewer>
          </EncryptedProvider>
          <ViewerInformationsWrapper
            isPublic={isPublic}
            disableFooter={disableFooter}
            validForPanel={validForPanel}
            currentFile={currentFile}
            toolbarRef={toolbarRef}
          >
            {children}
          </ViewerInformationsWrapper>
        </div>
      </ActionMenuProvider>
    </AlertProvider>
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
  /** If the Viewer is in public view */
  isPublic: PropTypes.bool,
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
  const { type, variant } = useCozyTheme()
  const { modalProps = { open: true } } = props.componentsProps || {}

  if (disableModal) {
    return <ViewerContainer {...props} />
  }

  return (
    <Modal {...modalProps} className={`CozyTheme--${type}-${variant}`}>
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
