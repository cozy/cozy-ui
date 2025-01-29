import React from 'react'

import { themesList } from 'cozy-client/dist/models/document/documentTypeData'
import { isQualificationNote } from 'cozy-client/dist/models/document/documentTypeDataHelpers'
import { getBoundT } from 'cozy-client/dist/models/document/locales'

import Icon from '../Icon'
import FileTypeNoteIcon from '../Icons/FileTypeNote'
import QualificationIconStack from '../QualificationIconStack'

export const makeOptions = lang => {
  const qualifT = getBoundT(lang)

  return {
    children: [
      {
        id: 'none',
        title: qualifT('Scan.themes.none'),
        icon: <QualificationIconStack />
      },
      ...themesList.map(theme => ({
        id: theme.id,
        title: qualifT(`Scan.themes.${theme.label}`),
        icon: <QualificationIconStack theme={theme.label} />,
        children: theme.items.map(item => ({
          id: item.label,
          item,
          title: qualifT(`Scan.items.${item.label}`),
          icon: isQualificationNote(item) ? (
            <Icon icon={FileTypeNoteIcon} size={64} />
          ) : (
            <QualificationIconStack qualification={item.label} />
          )
        }))
      }))
    ]
  }
}
