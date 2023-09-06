import React, { useMemo } from 'react'

import { useClient, useQuery, models } from 'cozy-client'

import Link from '../../Link'
import AppLinker from '../../AppLinker'
import FilePath from '../../FilePath'
import useBreakpoints from '../../providers/Breakpoints'

import {
  makeWebLink,
  normalizeAndSpreadAttributes,
  removeFilenameFromPath
} from '../helpers'
import { buildFileByIdQuery } from '../queries'

const { ensureFilePath } = models.file

const ToolbarFilePath = ({ file }) => {
  const client = useClient()
  const { isDesktop } = useBreakpoints()

  const normalizeFile = normalizeAndSpreadAttributes(file)

  const parentQuery = buildFileByIdQuery(normalizeFile.dir_id)
  const parentResult = useQuery(parentQuery.definition, {
    ...parentQuery.options,
    enabled: !!normalizeFile.dir_id
  })

  const fileWithPath = useMemo(
    () =>
      parentResult.data
        ? ensureFilePath(normalizeFile, parentResult.data)
        : undefined,
    [normalizeFile, parentResult.data]
  )

  if (fileWithPath) {
    const appSlug = 'drive'
    const nativePath = `/folder/${fileWithPath.dir_id}`
    const path = removeFilenameFromPath(fileWithPath.path)
    const link = makeWebLink({ client, path: nativePath, slug: appSlug })

    if (isDesktop && link) {
      return (
        <AppLinker app={{ slug: appSlug }} nativePath={nativePath} href={link}>
          {({ href, onClick }) => (
            <Link href={href} onClick={onClick} color="inherit">
              <FilePath className="u-white">{path}</FilePath>
            </Link>
          )}
        </AppLinker>
      )
    }
    return <FilePath className={isDesktop ? 'u-white' : null}>{path}</FilePath>
  }

  return null
}

export { ToolbarFilePath }
