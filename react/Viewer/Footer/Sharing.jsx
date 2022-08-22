import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { ShareModal, ShareButton } from 'cozy-sharing'
import { SharingProvider } from 'cozy-sharing/dist/SharingProvider'

const Sharing = ({ file }) => {
  const client = useClient()
  const [showShareModal, setShowShareModal] = useState(false)

  return (
    <>
      <SharingProvider
        client={client}
        doctype="io.cozy.files"
        documentType="Files"
      >
        {showShareModal && (
          <ShareModal
            document={file}
            documentType="Files"
            sharingDesc={file.name}
            onClose={() => setShowShareModal(false)}
          />
        )}
        <ShareButton
          extension="full"
          useShortLabel
          docId={file.id}
          onClick={() => setShowShareModal(true)}
        />
      </SharingProvider>
    </>
  )
}

Sharing.propTypes = {
  file: PropTypes.object
}

export default Sharing
