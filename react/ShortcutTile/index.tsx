import React from 'react'

import { IOCozyFile } from 'cozy-client/types/types'

import styles from '../AppTile/styles.styl'
import { nameToColor } from '../legacy/Avatar/helpers'
import { TileIcon } from '../Tile'
import Typography from '../Typography'
import { makeStyles } from '../styles'

interface ShortcutTileProps {
  file: Partial<IOCozyFile> & {
    name: string
    attributes?: { metadata?: { icon?: string; iconMimeType?: string } }
  }
}

const useStyles = makeStyles({
  letter: {
    color: 'white',
    margin: 'auto'
  },
  letterWrapper: {
    backgroundColor: ({ name }: { name: string }) =>
      (nameToColor as (name: string) => string)(name)
  }
})

export const ShortcutTile = ({ file }: ShortcutTileProps): JSX.Element => {
  const classes = useStyles({ name: file.name })
  const icon = file.attributes?.metadata?.icon
  const iconMimeType = file.attributes?.metadata?.iconMimeType

  if (icon) {
    return (
      <TileIcon>
        <img
          className={styles['AppTile-icon']}
          src={
            iconMimeType
              ? `data:${iconMimeType};base64,${icon}`
              : `data:image/svg+xml;base64,${window.btoa(icon)}`
          }
          width={48}
          height={48}
          alt={file.name}
        />
      </TileIcon>
    )
  }

  return (
    <TileIcon>
      <div className={classes.letterWrapper}>
        <Typography className={classes.letter} variant="h2" align="center">
          {file.name[0].toUpperCase()}
        </Typography>
      </div>
    </TileIcon>
  )
}
