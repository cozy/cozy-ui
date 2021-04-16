import React from 'react'
import PropTypes from 'prop-types'

import { FileDoctype } from '../proptypes'
import useBreakpoints from '../hooks/useBreakpoints'

import { getViewerComponentName } from './helpers'

const View = ({
  file,
  onClose,
  renderFallbackExtraContent,
  gestures,
  gesturesRef,
  onSwipe,
  isOnlyOfficeEnabled,
  onlyOfficeOpener
}) => {
  const { isDesktop } = useBreakpoints()
  const ComponentName = getViewerComponentName({
    file,
    isDesktop,
    isOnlyOfficeEnabled
  })

  return (
    <ComponentName
      file={file}
      onClose={onClose}
      renderFallbackExtraContent={renderFallbackExtraContent}
      gestures={gestures}
      gesturesRef={gesturesRef}
      onSwipe={onSwipe}
      onlyOfficeOpener={onlyOfficeOpener}
    />
  )
}

View.propTypes = {
  file: FileDoctype.isRequired,
  onClose: PropTypes.func.isRequired,
  renderFallbackExtraContent: PropTypes.func,
  // gestures, gesturesRef and onSwipe are got from ViewerControls
  gestures: PropTypes.object,
  gesturesRef: PropTypes.object,
  onSwipe: PropTypes.func
}

export default View
