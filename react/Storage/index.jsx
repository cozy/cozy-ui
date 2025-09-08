import PropTypes from 'prop-types'
import React from 'react'

import { useInstanceInfo } from 'cozy-client'
import { shouldDisplayOffers } from 'cozy-client/dist/models/instance'
import { isFlagshipApp } from 'cozy-device-helper'

import StorageButton from './StorageButton'
import StorageProgress from './StorageProgress'
import useBreakpoints from '../providers/Breakpoints'

const Storage = ({ onlyDesktop }) => {
  const { isDesktop, isMobile } = useBreakpoints()
  const instanceInfo = useInstanceInfo()

  if (onlyDesktop && !isDesktop) return null

  const showStorageButton =
    instanceInfo.isLoaded &&
    !isFlagshipApp() &&
    !isMobile &&
    shouldDisplayOffers(instanceInfo)

  return (
    <>
      <StorageProgress />
      {showStorageButton && <StorageButton className="u-mt-1" />}
    </>
  )
}

Storage.propTypes = {
  /** Component enabled only for desktop. Using `false` will enable it for mobile and tablet also. */
  onlyDesktop: PropTypes.bool
}

Storage.defaultProps = {
  onlyDesktop: true
}

export default Storage
