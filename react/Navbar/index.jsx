import React from 'react'

import { RealTimeQueries } from 'cozy-client'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import HomeIcon from './HomeIcon'
import HomeLinker from './HomeLinker'
import Separator from './Separator'
import BackButton from './BackButton'
import FileIcon from './FileIcon'
import ReadOnly from './ReadOnly'
import Sharing from './Sharing'
import FileName from './FileName'

/* export interface ToolbarProps {
  handleGoBack?: () => void,
  isPublic: Boolean
  isEditorReadOnly?: Boolean
  isEditorReady?: Boolean
  fileWithPath: File & { displayedPath: string} 
  renameInput?: React.Element
} */

const Toolbar = (
  handleGoBack,
  isPublic,
  isEditorReadOnly,
  isEditorReady,
  fileWithPath,
  renameInput
) => {
  const { isMobile } = useBreakpoints()

  // The condition is different in the case of a only office file that has been shared with us.
  // In this case there is a double redirection (one to know that the file is a share, the other
  // to open it on the host instance), so there is an additional entry in the history.
  return (
    <>
      <RealTimeQueries doctype="cozy.io.files" />
      <div className="u-flex u-flex-items-center u-flex-grow-1 u-ellipsis">
        {!isMobile && (
          <>
            {isPublic ? (
              <HomeIcon />
            ) : (
              <HomeLinker>
                <HomeIcon />
              </HomeLinker>
            )}
            <Separator />
          </>
        )}
        {handleGoBack && <BackButton onClick={handleGoBack} />}
        {!isMobile && fileWithPath.class && (
          <FileIcon fileClass={fileWithPath.class} />
        )}
        <FileName fileWithPath={fileWithPath} renameInput={renameInput} />
      </div>
      {isEditorReadOnly && <ReadOnly />}
      {!isPublic && isEditorReady && <Sharing fileWithPath={fileWithPath} />}
    </>
  )
}

export default Toolbar
