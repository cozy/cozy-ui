import React from 'react'
import { useClient, useFetchShortcut } from 'cozy-client'
import get from 'lodash/get'

import { withViewerLocales } from './withViewerLocales'
import { ButtonLink } from '../Button'
import NoViewer from './NoViewer'
import { FileDoctype } from '../proptypes'

const ShortcutViewer = ({ t, file }) => {
  const client = useClient()
  const { shortcutInfos } = useFetchShortcut(client, file.id)
  let url = ''
  if (shortcutInfos) {
    url = new URL(get(shortcutInfos, 'data.attributes.url'))
  }
  return (
    <NoViewer
      file={file}
      renderFallbackExtraContent={() => (
        <ButtonLink
          label={`${t('Viewer.goto', { url: get(url, 'origin', '') })}`}
          icon="openwith"
          href={`${get(url, 'origin', '')}`}
          target="_blank"
        />
      )}
    />
  )
}

ShortcutViewer.propTypes = {
  file: FileDoctype.isRequired
}

export default withViewerLocales(ShortcutViewer)
