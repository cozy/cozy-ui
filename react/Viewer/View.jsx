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
  onSwipe
}) => {
  const { isDesktop } = useBreakpoints()
  const ComponentName = getViewerComponentName(file, isDesktop)

  return (
    <ComponentName
      file={file}
      onClose={onClose}
      renderFallbackExtraContent={renderFallbackExtraContent}
      gestures={gestures}
      gesturesRef={gesturesRef}
      onSwipe={onSwipe}
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
