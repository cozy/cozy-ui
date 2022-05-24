import React from 'react'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import List from '../../MuiCozyTheme/List'
import ListItem from '../../MuiCozyTheme/ListItem'
import QualificationListItemText from './QualificationListItemText'
import { withViewerLocales } from '../withViewerLocales'

const {
  document: {
    locales: { getBoundT }
  }
} = models

const Qualification = ({ file = {}, contactsFullname, t, f, lang }) => {
  const scannerT = getBoundT(lang)

  const { name: filename, metadata = {} } = file
  const {
    qualification = {},
    page: pageLabel,
    datetime,
    datetimeLabel
  } = metadata

  return (
    <List className={'u-pv-1'}>
      {datetime && (
        <ListItem className={'u-ph-2'}>
          <QualificationListItemText
            primary={t(
              `Viewer.panel.qualification.date.title.${
                datetimeLabel === 'datetime' || datetimeLabel === undefined
                  ? 'addedOn'
                  : datetimeLabel
              }`
            )}
            secondary={f(datetime, 'DD/MM/YYYY')}
          />
        </ListItem>
      )}
      {contactsFullname && (
        <ListItem className={'u-ph-2'}>
          <QualificationListItemText
            primary={t('Viewer.panel.qualification.identity')}
            secondary={contactsFullname}
          />
        </ListItem>
      )}
      <ListItem className={'u-ph-2'}>
        <QualificationListItemText
          primary={t('Viewer.panel.qualification.label.title')}
          secondary={
            pageLabel
              ? t(`Viewer.panel.qualification.label.${pageLabel}`)
              : filename
          }
        />
      </ListItem>
      <ListItem className={'u-ph-2'}>
        <QualificationListItemText
          primary={t('Viewer.panel.qualification.qualification')}
          secondary={scannerT(`Scan.items.${qualification.label}`)}
        />
      </ListItem>
    </List>
  )
}

Qualification.propTypes = {
  file: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  f: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
}

export default withViewerLocales(Qualification)
