import React from 'react'

import Typography from 'cozy-ui/react/Typography'
import { nameToColor } from 'cozy-ui/react/Avatar/helpers'

import { TileIcon } from '../Tile'
import { makeStyles } from '../styles'
import styles from '../AppTile/styles.styl'

interface ShortcutTileProps {
  file: {
    attributes?: {
      metadata?: {
        icon?: string
        iconMimeType?: string
        description?: string
      }
    }
    name: string
  }
}

const useStyles = makeStyles({
  letter: {
    color: 'white',
    margin: 'auto'
  },
  letterWrapper: {
    backgroundColor: ({ name }: { name: string }) => nameToColor(name)
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
  } else {
    return (
      <TileIcon>
        <div className={classes.letterWrapper}>
          <Typography className={classes.letter} variant="h2" align="center">
            {file.name?.[0].toUpperCase()}
          </Typography>
        </div>
      </TileIcon>
    )
  }
}
