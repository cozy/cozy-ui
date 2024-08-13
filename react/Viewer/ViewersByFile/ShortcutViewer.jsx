import React from 'react'
import { useClient, useFetchShortcut } from 'cozy-client'
import get from 'lodash/get'

import { withViewerLocales } from '../hoc/withViewerLocales'
import { ButtonLink } from '../../deprecated/Button'
import { FileDoctype } from '../../proptypes'
import OpenwithIcon from '../../Icons/Openwith'

import NoViewer from '../NoViewer'

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
          icon={OpenwithIcon}
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
