import React from 'react'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import { useI18n } from '../I18n'
import { useClient, useFetchShortcut } from 'cozy-client'
import get from 'lodash/get'
import NoViewer from './NoViewer'
import { FileDoctype } from '../proptypes'

const ShortcutViewer = ({ file }) => {
  const client = useClient()
  const { t } = useI18n()
  const { shortcutInfos } = useFetchShortcut(client, file.id)
  let url = ''
  if (shortcutInfos) {
    url = new URL(shortcutInfos.data.attributes.url)
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

export default ShortcutViewer
